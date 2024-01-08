import Measurement from "./measurement.js";
import validateMeasurement from "../../utils/validateMeasurement.js";

export default async function put(req, res) {
  const updatedId = req.params?.id;
  let updatedData = req.body;
  updatedData.userId = res.locals.currentUser.id.toString();
  updatedData.username = res.locals.currentUser.username;

  if (!res.locals.measurement) {
    return res.status(404).json({ error: "The measurement doesn't exist" });
  }

  const errors = validateMeasurement(updatedData);

  if (Object.keys(errors).length > 0) {
    return res
      .status(400)
      .json({ errors });
  }

  try {
    await Measurement.updateOne(
      { _id: updatedId },
      { $set: updatedData } 
    );
  } catch (error) {
    return res.status(400).json({ message: "Error updating the measurement" });
  }

  res.status(200).json({ data: updatedData });
}
