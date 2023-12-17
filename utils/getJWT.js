import "dotenv/config";
import jwt from "jsonwebtoken";

export default function (data) {
  return jwt.sign(
    {
     data: data,
      exp:  Math.floor(Date.now() / 1000) + (60*60)//30 segundos //Math.floor(Date.now() / 1000) + (60 * 60) Una hora
    },
    process.env.SECRET_KEY,
  );
}
