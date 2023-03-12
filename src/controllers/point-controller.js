import { PointSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const pointController = {
  index: {
    handler: async function (request, h) {
      const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
      const point = await db.pointStore.getPointById(request.params.pointid);
      const viewData = {
        title: "Edit Point",
        placemark: placemark,
        point: point,
      };
      console.log("pointController index - viewData:", viewData);
      return h.view("point-view", viewData);
    },
  },

  update: {
    validate: {
      payload: PointSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        console.log("pointController update - validation error:", error.details);
        return h.view("point-view", { title: "Edit point error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const point = await db.pointStore.getPointById(request.params.pointid);
      const newPoint = {
        pointName: request.payload.pointName,
        category: request.payload.category,
        latitude: request.payload.latitude,
        longitude: request.payload.longitude,
        description: request.payload.description,
      };
      console.log("pointController update - newPoint:", newPoint);
      await db.pointStore.updatePoint(point, newPoint);
      console.log("pointController update - point updated:", point);
      return h.redirect(`/placemark/${request.params.id}`);
    },
  },
};
