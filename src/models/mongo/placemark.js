import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placemarkSchema = new Schema({
  placeMark: String,
  lat: String,
  long: String,
  img: String,
  userid: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  isPrivate: { type: Boolean, required: false },
});

export const Placemark = Mongoose.model("Placemark", placemarkSchema);
