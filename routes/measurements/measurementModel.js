import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
  id: String,
  amount: Number,
  date: String,
  measuredby: String,
  userId: Number,
  imageName: String,
});

const Measurement = mongoose.model("measurement", measurementSchema);

export default Measurement;
