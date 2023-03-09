import { PointSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const placemarkController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
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
        return h.view("placemark-view", { title: "Add point error", errors: error.details }).takeover().code(400);
      }, 
    },
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const newPoint = {
        pointName: request.payload.pointName,
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