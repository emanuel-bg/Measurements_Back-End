import validateUserData from "../../utils/validateUserData.js";
import User from "./user.js";

const SALT_ROUNDS = 8;

export default async function post(req, res) {
  const userData = req.body;
  const userExist = await User.findOne({ email: userData.email });

  if (userExist) {
    return res
      .status(409)
      .json({ message: "User already exists" });
  }

  const errors = validateUserData(userData);

  if (Object.keys(errors).length > 0) {
    return res
      .status(400)
      .json({ errors });
  }

  try {
    const hashedPassword = await encriptPassword(userData.password);
    userData.password = hashedPassword;

    const newUser = await User.create(userData);
    return res
      .status(201)
      .json({ message: "User successfully created", id: newUser._id });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Error creating the user" });
  }
}


