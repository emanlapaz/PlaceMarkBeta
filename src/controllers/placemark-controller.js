import { db } from "../models/db.js";

export const placemarkController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const viewData = {
        title: "Placemark", // title-> name
        placemark: placemark,
      };
      return h.view("placemark-view", viewData);
    },
  },

  addPoint: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const newPoint = {
        title: request.payload.title, // name to title
        category: request.payload.category,
        location: request.payload.location,
      };
      await db.pointStore.addPoint(placemark._id, newPoint);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },
  
  deletePoint: {
    handler: async function(request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      await db.pointStore.deletePoint(request.params.pointid);
      return h.redirect(`/placemark/${placemark._id}`);
    },
  },

};
