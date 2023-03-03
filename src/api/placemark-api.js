import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const placemarkApi = {
  find: {
    auth: false,
    handler: async function (request, h) {
      // implementation
    },
  },

  findOne: {
    auth: false,
    async handler(request) {
      // implementation
    },
  },

  create: {
    auth: false,
    handler: async function (request, h) {
      // implementation
    },
  },

  deleteOne: {
    auth: false,
    handler: async function (request, h) {
      // implementation
    },
  },

  deleteAll: {
    auth: false,
    handler: async function (request, h) {
      try {
        await db.placemarkStore.deleteAllPlacemarks();
        return h.response().code(204);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

};
