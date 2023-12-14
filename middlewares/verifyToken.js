import jwt from "jsonwebtoken"
import "dotenv/config"

 export default function(req, res, next){
  const token = req.header('Authorization').split(' ')[1];
  if (!token) {
      return res.status(401).json({ message: 'Token not found' });
  }
  try {
     jwt.verify(token, process.env.SECRET_KEY);
      next();
  } catch (error) {
      return res.status(401).json({ message: 'Invalid Token' });
  }

};

