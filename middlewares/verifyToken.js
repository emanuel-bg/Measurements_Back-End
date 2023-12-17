import jwt from "jsonwebtoken";
import "dotenv/config";

export default function verifyToken(req, res, next) {
  try {
    const token = req.header("Authorization")?.split(" ")[1];
    //Verify if the token exist
    if (!token) {
      throw { message: "Token not found", status: 401 };
    }

    const decoded = jwt.decode(token, process.env.SECRET_KEY);
    //Verify the decoded data in token
    if (!decoded) {
      throw { message: "Invalid token", status: 401 };
    }

    //Verify the token
    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          throw { message: "Session is expired", status: 401 };
        } else {
          throw err;
        }
      }
    });
    res.locals.token = token;
    next();
  } catch (error) {
    next(error);
  }
}
