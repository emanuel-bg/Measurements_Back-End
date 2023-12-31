// TODO remove unused imports
import Measurement from "./measurementModel.js";
import {
  validateMeasureDate,
  validateMeasureMeasuredby,
} from "../../utils/Validations.js";

export default async function post(req, res) {
  let measurementData = req.body;
  const errors = validate(measurementData);

  if (Object.keys(errors).length > 0) {
    return res
      .status(400)
      .json({ errors });
  }

  try {
    measurementData.userId = res.locals.currentUser.id.toString();
    measurementData.measuredby = res.locals.currentUser.username;
    // TODO unused variable
    const newMeasurements = await Measurement.create(measurementData);

    return res
      .status(201)
      .json({ data: measurementData });
  } catch (e) { // TODO respond with proper error
    console.log(e);
  }
}

// TODO move validate to its own file and add unit tests
function validate(measureData) {
  let errors = {};

  if (isNaN(measureData.amount)) {
    errors.amount = ["Invalid measure amount"];
  }

  return errors;
}
