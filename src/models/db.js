import { userMemStore } from "./mem/user-mem-store.js";
import { placemarkMemStore } from "./mem/placemark-mem-store.js";
import { pointMemStore } from "./mem/point-mem-store.js";

export const db = {
  userStore: null,
  placemarkStore: null,
  pointStore: null,

  init() {
    this.userStore = userMemStore;
    this.placemarkStore = placemarkMemStore;
    this.pointStore = pointMemStore;
  },
};
