// TODO add unit tests for model.
// consider renaming to 'user' since it is more like a convention.
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  image: String,
  timezone: String,
  offset: String,
});

userSchema.methods.public = function () {
  return {
    id: this._id,
    email: this.email,
    name: this.email,
    username: this.username,
    image: "",
    token: this.token,
  };
};

const User = mongoose.model("user", userSchema);

export default User;
