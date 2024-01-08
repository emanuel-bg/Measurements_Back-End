import User from "./user.js";
import Session from "../sessions/session.js";

export default async function me(_req, res) {
  try {
    const userToken = res.locals.token;
    const session = await Session.findOne({ token: userToken });

    if (!session) {
      return res.status(200);
    }

    const user = await User.findOne({ _id: session.userId });

    if(!user){
        return res.status(200);
    }

    res.status(200).json({ data: user.public() });
  } catch (error) {
    console.log("Error trying to log out: ", error); 

    return res.status(500).json({ message: "Server side error" });
  }
}
