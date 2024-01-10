// TODO add unit tests for model.
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, 
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: String,
  timezone: String,
  offset: String,
  token: String
});


// Unit test
userSchema.methods.public = function () {
  return {
    id: this._id,
    email: this.email,
    name: this.name,
    username: this.username,
    image: "",
    token: this.token,
  };
};// TODO add unit tests for model.

const User = mongoose.model("user", userSchema);

export default User;
