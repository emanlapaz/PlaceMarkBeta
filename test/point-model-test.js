import { assert } from "chai";
import { db } from "../src/models/db.js";
import { testPlacemarks, testPoints, naas, dublin, kildare, testUsers } from "./fixtures.js";
import { assertSubset } from "./test-utils.js";

suite("Point Model tests", () => {

  let dublinList = null;

  setup(async () => {
    db.init("mongo");
    await db.placemarkStore.deleteAllPlacemarks();
    await db.pointStore.deleteAllPoints();
    dublinList = await db.placemarkStore.addPlacemark(dublin);
    for (let i = 0; i < testPoints.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      testPoints[i] = await db.pointStore.addPoint(dublinList._id, testPoints[i]);
    }
  });

  test("create single point", async () => {
    const kildareList = await db.placemarkStore.addPlacemark(kildare);
    const point = await db.pointStore.addPoint(kildareList._id, naas)
    assert.isNotNull(point._id);
    assertSubset (naas, point);
  });

  test("get multiple points", async () => {
    const points = await db.pointStore.getPointsByPlacemarkId(dublinList._id);
    assert.equal(testPoints.length, testPoints.length)
  });

  test("delete all points", async () => {
    const points = await db.pointStore.getAllPoints();
    assert.equal(testPoints.length, points.length);
    await db.pointStore.deleteAllPoints();
    const newPoints = await db.pointStore.getAllPoints();
    assert.equal(0, newPoints.length);
  });

  test("get a point - success", async () => {
    const kildareList = await db.placemarkStore.addPlacemark(kildare);
    const point = await db.pointStore.addPoint(kildareList._id, naas)
    const newPoint = await db.pointStore.getPointById(point._id);
    assertSubset (naas, newPoint);
  });

  test("delete One Point - success", async () => {
    await db.pointStore.deletePoint(testPoints[0]._id);
    const points = await db.pointStore.getAllPoints();
    assert.equal(points.length, testPlacemarks.length - 1);
    const deletedPoint = await db.pointStore.getPointById(testPoints[0]._id);
    assert.isNull(deletedPoint);
  });

  test("get a point - bad params", async () => {
    assert.isNull(await db.pointStore.getPointById(""));
    assert.isNull(await db.pointStore.getPointById());
  });

  test("delete one point - fail", async () => {
    await db.pointStore.deletePoint("bad-id");
    const points = await db.pointStore.getAllPoints();
    assert.equal(points.length, testPlacemarks.length);
  });
});
