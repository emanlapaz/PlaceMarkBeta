import Joi from "joi";
import { PlacemarkSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";


export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const placemarks = await db.placemarkStore.getUserPlacemarks(loggedInUser._id);
      console.log("Placemarks retrieved: ", placemarks);
      const viewData = {
        title: "PlaceMark Dashboard",
        user: loggedInUser,
        placemarks: placemarks,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPlacemark: {
    validate: {
      payload: PlacemarkSpec.keys({ privacy: Joi.string().valid("public", "private").optional() }),
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        console.log("Add Placemark error: ", error);
        return h.view("dashboard-view", { title: "Add Placemark error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const newPlaceMark = {
        userid: loggedInUser._id,
        placeMark: request.payload.placeMark,
        lat: request.payload.lat,
        long: request.payload.long,
        isPrivate: request.payload.privacy === "private",
      };
      console.log("New Placemark: ", newPlaceMark);
      await db.placemarkStore.addPlacemark(newPlaceMark);
      return h.redirect("/dashboard");
    },
  },
  

  deletePlacemark: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      console.log("Placemark retrieved: ", placemark);
      await db.placemarkStore.deletePlacemarkById(placemark._id);
      return h.redirect("/dashboard");
    },
  },
};
