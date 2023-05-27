import bcrypt from "bcrypt"; 
import { UserSpec, UserCredentialsSpec } from "../models/joi-schemas.js";
import { db } from "../models/db.js";

const saltRounds = 10;  

export const accountsController = {
  index: {
    auth: false,
    handler: function (request, h) {
      console.log("index handler called");
      return h.view("main", { title: "Welcome to Placemark" });
    },
  },

  showEdit: {
    auth: false,
    handler: function (request, h) {
      console.log("showEdit handler called");
      return h.view("user-view", { title: "Edit user details" });
    },
  },
  edit: {
    auth: false,
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        console.log("edit failAction called with error:", error);
        return h.view("user-view", {title: "Sign up error", errors: error.details,}).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      console.log("signup handler called with payload:", request.payload);
      const user = request.payload;
      await db.userStore.updateUser(user);
      return h.redirect("/dashboard");
    },
  },

  showSignup: {
    auth: false,
    handler: function (request, h) {
      console.log("showSignup handler called");
      return h.view("signup-view", { title: "Sign up for Placemark" });
    },
  },
  signup: {
    auth: false,
    validate: {
      payload: UserSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        console.log("signup failAction called with error:", error);
        return h
          .view("signup-view", { title: "Sign up error", errors: error.details })
          .takeover()
          .code(400);
      },
    },
    handler: async function (request, h) {
      console.log("signup handler called with payload:", request.payload);
      const user = request.payload;
      user.password = await bcrypt.hash(user.password, saltRounds);
      await db.userStore.addUser(user); // Use addUser to add a new user
      return h.redirect("/");
    },
  },
  
  showLogin: {
    auth: false,
    handler: function (request, h) {
      console.log("showLogin handler called");
      return h.view("login-view", { title: "Login to Placemark" });
    },
  },
  login: {
    auth: false,
    validate: {
      payload: UserCredentialsSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        console.log("login failAction called with error:", error);
        return h.view("login-view", { title: "Log in error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      console.log("login handler called with payload:", request.payload);
      const { email, password } = request.payload;
      const user = await db.userStore.getUserByEmail(email);
      const passwordsMatch = await bcrypt.compare(password, user.password);  
      if (!user || !passwordsMatch) {   
        return h.redirect("/");
      }
      request.cookieAuth.set({ id: user._id });
      return h.redirect("/dashboard");
    },
  },
  logout: {
    handler: function (request, h) {
      console.log("logout handler called");
      request.cookieAuth.clear();
      return h.redirect("/");
    },
  },

  async validate(request, session) {
    const user = await db.userStore.getUserById(session.id);
    if (!user) {
      return { isValid: false };
    }
    return { isValid: true, credentials: user };
  },
};
