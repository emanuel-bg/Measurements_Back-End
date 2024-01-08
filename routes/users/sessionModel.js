// TODO consider moving it to it's own sessions folder
// add unit tests to ensure we will have the correct functionality
import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  userId: String,
  creted_at: Number,
  updated_at: Number,
  token:String
});

const Session = mongoose.model("session", sessionSchema);

export default Session;
