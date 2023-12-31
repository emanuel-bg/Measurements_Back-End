import "dotenv/config";
import jwt from "jsonwebtoken";

export default function (data) {
  // TODO use const to explain these magic numbers
  const expiration = Math.floor(Date.now() / 1000) + (60 * 60)//30 segundos //Math.floor(Date.now() / 1000) + (60 * 60) Una hora
  const options = {
    data: data,
    exp: expiration
  };

  return jwt.sign(options, process.env.SECRET_KEY);
}
