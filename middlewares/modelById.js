
import mongoose from "mongoose";

export default function modelById(model, name) {
  return async function (req,res,next) {
    const modelId = req.params?.id?.toString().trim();
    if (!modelId||!mongoose.Types.ObjectId.isValid(modelId)) {
      return next({ message: `${name} not found`, status: 404 });
    }
    const data = await model.findById(modelId);   //Verify the token  
    res.locals[name] = data;
    next();
  };
}
