import Measurement from "./measurement.js";
import validateMeasurement from "../../utils/validateMeasurement.js"
export default async function post(req, res) {
  let measurementData = req.body;
  const errors = validateMeasurement(measurementData);

  if (Object.keys(errors).length > 0) {
    return res
      .status(400)
      .json({ errors });
  }

  try {
    measurementData.userId = res.locals.currentUser.id.toString();
    measurementData.measuredby = res.locals.currentUser.username;
   measurementData.created_at=Date.now()/1000
   measurementData.updated_at=Date.now()/1000
    await Measurement.create(measurementData);

    return res
      .status(201)
      .json({ data: measurementData });
  } catch (error) {
    return res
    .status(400)
    .json({ message:"Error trying to create the measurement: "+error });
  }
}
