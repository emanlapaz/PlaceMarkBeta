import { PlacemarkSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const editPlacemarkController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const { _id, placeMark, lat, long, isPrivate } = placemark;
      const viewData = {
        title: "Edit Placemark",
        placemarkId: _id,
        placeMark: placeMark,
        lat: lat,
        long: long,
        isPrivate: isPrivate
      };
      console.log("editPlacemarkController index - viewData:", viewData);
      return h.view("edit-placemark", viewData);
    },
  },

  update: {
    validate: {
      payload: PlacemarkSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        console.log("placemark update - validation error:", error.details);
        return h.view("edit-placemark", { title: "Edit placemark error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      try {
        const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
    
        if (!placemark) {
          throw new Error("Placemark not found");
        }
    
        const { placeMark, lat, long, isPrivate } = request.payload;
        const isPrivateBoolean = isPrivate === "true";  // assuming 'true' string means private
    
        await db.placemarkStore.updatePlacemarkById(placemark._id, placeMark, lat, long, isPrivateBoolean);
    
        return h.redirect("/dashboard");
      } catch (error) {
        console.log("placemarkController update - error:", error);
        return h.view("edit-placemark", {
          title: "Edit Placemark",
          error: "Error updating placemark",
        });
      }
    },
  }
};
