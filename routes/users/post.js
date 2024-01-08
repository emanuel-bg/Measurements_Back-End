import bcrypt from "bcrypt";
import validateUserData from "../../utils/validateUserData.js";

import User from "./user.js";

export default async function post(req, res) {
  let userData = req.body;
  const userExist = await User.findOne({ email: userData.email });
  if (userExist) {
    return res.status(409).json({ message: "User already exist" });
  }

  const errors = validateUserData(userData)

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // TODO move this to its own file/function
  bcrypt.hash(userData.password, 8, async (err, hash) => {
    if (err) {
      throw Error;
    }
    const hashedPassword = hash;
    userData.password = hashedPassword;
    try {
      const newUser = await User.create(userData);
      return res
        .status(201)
        .json({ message: "User succesfully created", id: newUser._id });
    } catch (error) {
      console.log(error);
      res.status(400).json({message:"Error creating the user"})
    }
  });
}


