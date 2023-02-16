import { Point } from "./point.js";

export const pointMongoStore = {
  async getPointsByPlacemarkId(id) {
    const points = await Point.find({ placemarkid: id }).lean();
    return points;
  },
};
