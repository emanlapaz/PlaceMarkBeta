import { userMemStore } from "./mem/user-mem-store.js";
import { placemarkMemStore } from "./mem/placemark-mem-store.js";
import { pointMemStore } from "./mem/point-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { placemarkJsonStore } from "./json/placemark-json-store.js";
import { pointJsonStore } from "./json/point-json-store.js";

export const db = {
  userStore: null,
  placemarkStore: null,
  pointStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.placemarkStore = placemarkJsonStore;
        this.pointStore = pointJsonStore;
        break;
      default:
        this.userStore = userMemStore;
        this.placemarkStore = placemarkMemStore;
        this.pointStore = pointMemStore;
    }
  },
};
