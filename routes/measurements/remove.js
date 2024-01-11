import Measurement from "./measurement.js";
import mongoose from "mongoose";
export default async function remove(req, res) {
  const deletedId = req.params.id?.toString().trim();


  if (!deletedId || !mongoose.Types.ObjectId.isValid(deletedId)) {
     next({ message: 'Id not valid', status: 404 });
  }
  try {
    const result = await Measurement.deleteOne({ _id: deletedId });

    if (!res.locals.measurement) {
      return res
        .status(200)
        .json({ data: { deletedId } });
    }

    return res
      .status(200)
      .json({ data: { deletedId } });
  } catch (error) {
    console.log(error, "Error while trying to delete the measurement");
    res.status(500).json({message:"Server Side Error"}); 
  }
}
