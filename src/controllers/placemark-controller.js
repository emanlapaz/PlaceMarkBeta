import cloudinary from "cloudinary";
import { PointSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";
import { imageStore } from "../models/image-store.js";



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
        latitude: request.payload.latitude,
        longitude: request.payload.longitude,
        description: request.payload.description,

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

  uploadImage: {
    handler: async function (request, h) {
      try {
        const placemark = await db.placemarkStore.getPlacemarkById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          console.log("File received:", file);
          const url = await imageStore.uploadImage(file);
          placemark.img = url;
          await db.placemarkStore.updatePlacemark(placemark);
        }
        return h.redirect(`/placemark/${placemark._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/placemark/${placemark._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },

  deleteImage: {
    handler: async function(request, h) {
      try {
        const placemarkId = request.params.id;
        const imgId = request.params.imgid;
        console.log("Image ID:", imgId); // add this line to log imgId
        const placemark = await db.placemarkStore.getPlacemarkById(placemarkId);
  
        // rest of the code
  
  
        if (!placemark || !placemark.img || placemark.img !== imgId) {
          return h.redirect(`/placemark/${placemarkId}`);
        }
  
        const publicId = imgId.replace(`${cloudinary.config().cloud_name  }/`, "").replace(/\.[^/.]+$/, "");
        await cloudinary.uploader.destroy(publicId);
  
        placemark.img = undefined;
        await db.placemarkStore.updatePlacemark(placemark);
  
        // Call imageStore deleteImage to remove image from local storage
        await imageStore.deleteImage(imgId);
  
        return h.redirect(`/placemark/${placemarkId}`);
      } catch (error) {
        console.error(error);
        return h.response("Error deleting image").code(500);
      }
    },
  }
  
  
  
  

  
};
