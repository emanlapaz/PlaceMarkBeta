import { PointSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const placemarkController = {
  index: {
    handler: async function (request, h) {
      console.log("Fetching placemark with ID:", request.params.id);
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      console.log("Placemark retrieved:", placemark);
      const viewData = {
        title: "Placemark",
        placemark: placemark,
      };
      return h.view("placemark-view", viewData);
    },
  },

  addPoint: {
    validate: {
      payload: PointSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        console.log("Add point error:", error);
        return h.view("placemark-view", { title: "Add point error", errors: error.details }).takeover().code(400);
      }, 
    },
    handler: async function (request, h) {
      console.log("Adding point to placemark with ID:", request.params.id);
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      console.log("Placemark retrieved:", placemark);
      const newPoint = {
        pointName: request.payload.pointName,
        category: request.payload.category,
        location: request.payload.location,
      };
      await db.pointStore.addPoint(placemark._id, newPoint);
      console.log("Point added to placemark with ID:", placemark._id);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },
  
  deletePoint: {
    handler: async function(request, h) {
      console.log("Deleting point with ID:", request.params.pointid, "from placemark with ID:", request.params.id);
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      console.log("Placemark retrieved:", placemark);
      await db.pointStore.deletePoint(request.params.pointid);
      console.log("Point deleted from placemark with ID:", placemark._id);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },
};
