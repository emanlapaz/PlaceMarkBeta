import { db } from "../models/db.js";

export const communityController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      // Retrieve all placemarks
      const allPlacemarks = await db.placemarkStore.getAllUserPlacemarks();
      console.log("All placemarks retrieved: ", allPlacemarks);
      
      // Filter out private placemarks
      const publicPlacemarks = allPlacemarks.filter(placemark => !placemark.isPrivate);
      console.log("Public placemarks: ", publicPlacemarks);
  
      // Get points for each placemark and add them to the placemark object
      const placemarksWithPoints = await Promise.all(publicPlacemarks.map(async (placemark) => {
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
