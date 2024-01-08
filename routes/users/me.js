import User from "./userModel.js";
import Session from "./sessionModel.js";

export default async function me(req, res) { // TODO remove unused variable
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
    console.log(error); // TODO add something to describe the error
    // console.log('Error on ...', error);

    return res.status(500).json({ message: "Server side error" });
  }
}
