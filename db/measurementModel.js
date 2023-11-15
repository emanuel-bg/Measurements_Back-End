import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
  amount: Number,
  date: String,
  measuredby: String,
  userId: Number,
  image: String,
});

const Measurement = mongoose.model("measurement", measurementSchema);

export default Measurement;