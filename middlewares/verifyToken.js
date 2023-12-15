import jwt from "jsonwebtoken";
import "dotenv/config";

export default function verifyToken(req, res, next) {

  const token = req.header("Authorization")?.split(" ")[1];

  try {
    if (!token) throw { message: "Token not found", status: 401 };

    const decoded = jwt.decode(token, process.env.SECRET_KEY);
    if (!decoded) throw { message: "Invalid token", status: 401 };

    res.locals.token = token;

    jwt.verify(token, process.env.SECRET_KEY, (err) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          throw { message: "Session is expired", status: 401 };
        } else {
          throw err;
        }
      }
    });

    next();
  } catch (error) {
    next(error);
  }
}
