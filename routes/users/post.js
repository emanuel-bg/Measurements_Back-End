import bcrypt from "bcrypt";
import {
  NoNull,
  validateEmail,
  validateLetters,
  validatePassword,
  NoSpacesAndNull,
} from "../../utils/Validations.js";

import User from "./userModel.js";

export default async function post(req, res) {
  let userData = req.body;
  const userExist = await User.findOne({ email: userData.email });
  if (userExist) {
    return res.status(409).json({ message: "User already exist" });
  }

  const errors = validate(userData)

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // TODO move this to its own file/function
  bcrypt.hash(userData.password, 8, async (err, hash) => {
    if (err) throw Error; // TODO use multi-line if statements, it will help read and maintain
    const hashedPassword = hash;
    userData.password = hashedPassword;
    try {
      const newUser = await User.create(userData);
      return res
        .status(201)
        .json({ message: "User succesfully created", id: newUser._id });
    } catch (e) {
      console.log(e); // TODO send proper error to FE
    }
  });
}

function validate(userData) {
  const errors = {};
  if (!validateEmail(userData.email)) {
    errors.email = ["Invalid email"];
  }

  if (!validatePassword(userData.password)) {
    errors.password = ["The password doesn't meet the system requirements"];
  }

  if (!NoSpacesAndNull(userData.username)) {
    errors.username = ["The username doesn't meet the system requirements"];
  }

  if (!validateLetters(userData.name) || !NoNull(userData.name)) {
    errors.name = ["The name doesn't meet the system requirements"];
  }

  return errors;
}
