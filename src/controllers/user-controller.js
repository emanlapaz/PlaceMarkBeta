import { UserSpec, UserCredentialsSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

export const userController = {
  index: {
    auth: false,
    handler: async function (request, h) {
      console.log("userController index - request.params.id:", request.params.id);
      const loggedInUser = request.auth.credentials;
      const user = await db.userStore.getUserById(request.params.id);
      console.log("userController index - user:", user);
      const viewData = {
        title: "Edit User",
        user: loggedInUser,
      };
      console.log("userController index - viewData:", viewData);
      return h.view("user-view", viewData);
    },
  },

  update: {
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        console.log("userController update - validation error:", error.details);
        return h.view("user-view", { title: "Edit user error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const user = await db.userStore.getUserById(request.params.userid);
      const newUser = {
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
        email: request.payload.email,
        password: request.payload.password,
      };
      console.log("userController update - newUser:", newUser);
      await db.userStore.updateUser(user, newUser);
      console.log("userController update - user updated:", user);
      return h.redirect(`/placemark/${request.params.id}`);
    },
  },
};
