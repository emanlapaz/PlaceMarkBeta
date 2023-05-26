import { db } from "../models/db.js";

export const communityController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const placemarks = await db.placemarkStore.getAllUserPlacemarks();
      console.log("Placemarks retrieved: ", placemarks);
      const viewData = {
        title: "Community Dashboard",
        user: loggedInUser,
        placemarks: placemarks,
      };
      return h.view("community-view", viewData);
    },
  },
};