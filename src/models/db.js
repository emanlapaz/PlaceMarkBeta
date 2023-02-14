// import { userMemStore } from "./mem/user-mem-store.js";
// import { playlistMemStore } from "./mem/playlist-mem-store.js";
// import { trackMemStore } from "./mem/track-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { placemarkJsonStore } from "./json/placemark-json-store.js";
import { pointJsonStore } from "./json/point-json-store.js";

export const db = {
  userStore: null,
  placemarkStore: null,
  pointStore: null,

  init() {
    this.userStore = userJsonStore;
    this.placemarkStore = placemarkJsonStore;
    this.pointStore = pointJsonStore;
  },
};
