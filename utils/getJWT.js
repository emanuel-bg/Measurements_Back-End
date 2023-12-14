import "dotenv/config";
import jwt from "jsonwebtoken";

export default function (data) {
  console.log(data)
  return jwt.sign(
    {
     data: data,
     exp: Math.floor(Date.now() / 1000) + (60 * 60)
    },
    process.env.SECRET_KEY,
  );
}
