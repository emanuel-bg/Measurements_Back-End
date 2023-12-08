import mongoose from "mongoose";

const measurementSchema = new mongoose.Schema({
  amount: Number,
  date: Number,
  measuredby: String,
  userId: String,
  imageName: String,
  created_at: Number,
  updated_at:Number
});


measurementSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
measurementSchema.set('toJSON', {
  virtuals: true
});

const Measurement = mongoose.model("measurement", measurementSchema);

export default Measurement;
