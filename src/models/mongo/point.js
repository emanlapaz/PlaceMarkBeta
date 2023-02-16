import Mongoose from "mongoose";

const { Schema } = Mongoose;

const pointSchema = new Schema({
  pointName: String,
  category: String,
  location: Number,
  placemarkid: {
    type: Schema.Types.ObjectId,
    ref: "Placemark",
  },
});

export const Point = Mongoose.model("Point", pointSchema);
