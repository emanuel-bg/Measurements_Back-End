import User from "../routes/users/user.js";
import Session from "../routes/sessions/session.js";

export default async function currentUser(_req, res, next) {
  try {
    const userToken = res.locals.token;
    const session = await Session.findOne({ token: userToken });

    if (!session) {
       next({ message: "Not authenticated", status: 400 });
    }

    const user = await User.findOne({ _id: session.userId });

    if (!user) {
       next({ message: "Not authenticated", status: 400 })
    }

    res.locals.currentUser = user.public();
    next();
  } catch (error) {
    console.log(error);
     next({ message: "Server side error", status: 500 });
  }
}
