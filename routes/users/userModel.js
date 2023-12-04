import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  image:String
});

userSchema.methods.public = function () {
  return {
    email: this.email,
    name: this.email,
    username: this.username,
    image:"",
    token: "",
  };
};

const User = mongoose.model("user", userSchema);

export default User;
