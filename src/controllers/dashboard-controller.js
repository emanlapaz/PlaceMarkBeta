import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const placemarks = await db.placemarkStore.getAllPlacemarks();
      const viewData = {
        title: "PlaceMark Dashboard",
        placemarks: placemarks,
      };
      return h.view("dashboard-view", viewData);
    },
  },

  addPlacemark: {
    handler: async function (request, h) {
      const newPlaceMark = {
        title: request.payload.title,
      };
      await db.placemarkStore.addPlacemark(newPlaceMark);
      return h.redirect("/dashboard");
    },
  },
};
