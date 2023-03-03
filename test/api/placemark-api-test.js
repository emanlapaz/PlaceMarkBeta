import { EventEmitter } from "events";
import { assert } from "chai";
import { placemarkService } from "./placemark-service.js";
import { assertSubset } from "../test-utils.js";

import { maggie, kildare, testPlacemarks } from "../fixtures.js";



EventEmitter.setMaxListeners(25);

suite("Placemark API tests", () => {

  let user = null;

  setup(async () => {
      await placemarkService.deleteAllPlacemarks();
      await placemarkService.deleteAllUsers();
      user = await placemarkService.createUser(maggie);
      kildare.userid = user._id;
    });

  teardown(async () => {});

  test("create placemark", async () => {
  });

  test("delete a placemark", async () => {
  });

  test("create multiple placemarks", async () => {
  });

  test("remove non-existant placemark", async () => {
  });
});
