import User from "./userModel.js";
import Session from "./sessionModel.js";
import bcrypt from "bcrypt";
import getJWT from "../../utils/getJWT.js";

export default async function Login(req, res) {
  try {

    const userData = req.body;
    const user = await User.findOne({ email: userData.email });

    if (user == null) {
      let errors = {};
      errors.email = ["Invalid user or password", "Email required"];
      errors.password = ["Invalid user or password"];
      return res.status(422).json({ errors });
    }
    //validar email
    const validPassord = await bcrypt.compare(userData.password, user.password);

    if (!user || !validPassord) {
      let errors = {};
      errors.email = ["Invalid user or password", "Email required"];
      errors.password = ["Invalid user or password"];
      return res.status(422).json({ errors });
    }
    user.token = getJWT(user.public());
    await Session.create({
      userId: user.id,
      creted_at: Date.now(),
      updated_at: Date.now(),
      token: user.token,
    });

    
    res.status(200).json({ data: user.public() });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server side error" });
  }
}
