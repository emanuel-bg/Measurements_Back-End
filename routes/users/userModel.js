import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password:String
});


userSchema.methods.comparePassword = function(candidatePassword) {
    return this.password === candidatePassword;
  };

const User = mongoose.model("user", userSchema);

export default User;