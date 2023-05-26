import { db } from "../models/db.js";

export const communityController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const placemarks = await db.placemarkStore.getAllUserPlacemarks();
      console.log("Placemarks retrieved: ", placemarks);

      // Get points for each placemark and add them to the placemark object
      const placemarksWithPoints = await Promise.all(placemarks.map(async (placemark) => {
        const points = await db.pointStore.getPointsByPlacemarkId(placemark._id);
        return {...placemark, points};
      }));

      const viewData = {
        title: "Community Dashboard",
        user: loggedInUser,
        placemarks: placemarksWithPoints,
      };
      return h.view("community-view", viewData);
    },
  },
};
