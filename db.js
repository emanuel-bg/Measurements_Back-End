import mongoose from "mongoose";
export default function connectDatabase(){
mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}