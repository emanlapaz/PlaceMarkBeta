import { aboutController } from "./controllers/about-controller.js";
import { accountsController } from "./controllers/accounts-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { placemarkController } from "./controllers/placemark-controller.js";
import { pointController } from "./controllers/point-controller.js";
import { editPlacemarkController } from "./controllers/editPlacemark-controller.js";
import { userController } from "./controllers/user-controller.js";
import { communityController } from "./controllers/community-controller.js";

export const webRoutes = [
  { method: "GET", path: "/", config: accountsController.index },
  { method: "GET", path: "/signup", config: accountsController.showSignup },
  { method: "GET", path: "/login", config: accountsController.showLogin },
  { method: "GET", path: "/logout", config: accountsController.logout },
  { method: "POST", path: "/register", config: accountsController.signup },
  { method: "POST", path: "/authenticate", config: accountsController.login },

  { method: "GET", path: "/about", config: aboutController.index },
  { method: "GET", path: "/community", config: communityController.index },

  { method: "GET", path: "/dashboard", config: dashboardController.index },
  { method: "POST", path: "/dashboard/addplacemark", config: dashboardController.addPlacemark },
  { method: "GET", path: "/dashboard/deleteplacemark/{id}", config: dashboardController.deletePlacemark },

  { method: "GET", path: "/dashboard/editplacemark/{id}", config: editPlacemarkController.index },
  { method: "POST", path: "/dashboard/editplacemark/{id}", config: editPlacemarkController.update },


  { method: "GET", path: "/placemark/{id}", config: placemarkController.index },
  { method: "POST", path: "/placemark/{id}/addpoint", config: placemarkController.addPoint },
  { method: "GET", path: "/placemark/{id}/deletepoint/{pointid}", config: placemarkController.deletePoint },

  { method: "GET", path: "/point/{id}/editpoint/{pointid}", config: pointController.index },
  { method: "POST", path: "/point/{id}/updatepoint/{pointid}", config: pointController.update },

  { method: "POST", path: "/placemark/{id}/uploadimage", config: placemarkController.uploadImage },
  { method: "DELETE", path: "/dashboard/placemark/{id}/deleteimage/{imgid}", config: placemarkController.deleteImage },
  
  { method: "GET", path: "/compoint/{id}", config: placemarkController.compointView },

  { method: "GET", path: "/{param*}", handler: { directory: { path: "./public" } }, options: { auth: false } }
];
