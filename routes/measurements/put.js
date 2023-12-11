import Measurement from "./measurementModel.js";

export default async function put(req, res) {
  const updatedId = req.params.id;
  let updatedData = req.body;

  const exist = await Measurement.countDocuments({ _id: updatedId });

  if (!exist) {
    message = "Object does not exist";
    return res.status(400).json({ message });
  }
  
  try {
    await Measurement.updateOne(
      { _id: updatedId },
      {
        $set: {
          amount: updatedData.amount,
          date: updatedData.date,
          measuredby: updatedData.measuredby,
          userId: updatedData.userId,
          imageName: updatedData.imageName,
        },
      }
    );
  } catch (e) {
    updatedData = req.body;
    message = "Error updating de object";
    errors = e;
  }
  res.status(200).json({ data:updatedData});
}
