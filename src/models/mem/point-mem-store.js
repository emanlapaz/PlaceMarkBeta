import { v4 } from "uuid";

let points = [];

export const pointMemStore = {
  async getAllPoints() {
    return points;
  },

  async addPoint(placemarkId, point) {
    point._id = v4();
    point.placemarkid = placemarkId;
    points.push(point);
    return point;
  },

  async getPointsByPlacemarkId(id) {
    return points.filter((point) => point.placemarkid === id);
  },

  async getPointById(id) {
    return points.find((point) => point._id === id);
  },

  async getPlacemarkPoints(placemarkId) {
    return points.filter((point) => point.placemarkid === placemarkId);
  },

  async deletePoint(id) {
    const index = points.findIndex((point) => point._id === id);
    points.splice(index, 1);
  },

  async deleteAllPoints() {
    points = [];
  },

  async updatePoints(point, updatedPoint) { // name or title
    point.title= updatedPoint.title;
    point.category = updatedPoint.category;
    point.location = updatedPoint.location;
  },
};
