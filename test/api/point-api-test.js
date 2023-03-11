import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkService } from "./placemark-service.js";
import { maggie, kildare, testPlacemarks, testPoints, naas } from "../fixtures.js";

suite("Point API tests", () => {
  let user = null;
  let dublinAreas = null;

  setup(async () => {
    placemarkService.clearAuth();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    await placemarkService.deleteAllPlacemarks();
    await placemarkService.deleteAllPoints();
    await placemarkService.deleteAllUsers();
    user = await placemarkService.createUser(maggie);
    await placemarkService.authenticate(maggie);
    kildare.userid = user._id;
    dublinAreas = await placemarkService.createPlacemark(kildare);
  });

  teardown(async () => {});

  test("create point", async () => {
    const returnedPoint = await placemarkService.createPoint(dublinAreas._id, naas);
    assertSubset(naas, returnedPoint);
  });

  test("create Multiple points", async () => {
    console.log(testPoints);
    for (let i = 0; i < testPoints.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPoint(dublinAreas._id, testPoints[i]);
    }
    const returnedPoints = await placemarkService.getAllPoints();
    assert.equal(returnedPoints.length, testPoints.length);
    for (let i = 0; i < returnedPoints.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const point = await placemarkService.getPoint(returnedPoints[i]._id);
      assertSubset(point, returnedPoints[i]);
    }
  });

  test("Delete PointApi", async () => {
    console.log(testPoints);
    for (let i = 0; i < testPoints.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPoint(dublinAreas._id, testPoints[i]);
    }
    let returnedPoints = await placemarkService.getAllPoints();
    assert.equal(returnedPoints.length, testPoints.length);
    for (let i = 0; i < returnedPoints.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      const point = await placemarkService.deletePoint(returnedPoints[i]._id);
    }
    returnedPoints = await placemarkService.getAllPoints();
    assert.equal(returnedPoints.length, 0);
  });

  test("denormalised placemark", async () => {
    console.log(testPoints);
    for (let i = 0; i < testPoints.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await placemarkService.createPoint(dublinAreas._id, testPoints[i]);
    }
    const returnedPlacemark = await placemarkService.getPlacemark(dublinAreas._id);
    console.log(returnedPlacemark);
    assert.equal(returnedPlacemark.points.length, testPoints.length);
    for (let i = 0; i < testPoints.length; i += 1) {
      assertSubset(testPoints[i], returnedPlacemark.points[i]);
    }
  });
});
