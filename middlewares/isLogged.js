import Session from "../routes/users/sessionModel";
import User from "../routes/users/userModel";

export default async function (req, res, next) {
  if (!req.header("Authorization")) {
    next();
  }
  const token = req.header("Authorization").split(" ")[1];
  const session = await Session.find({ token: token });
  const user = await User.find({ _id: session.userId });
  res.status(200).json({ data: user.public() });
}
