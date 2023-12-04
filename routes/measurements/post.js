import Measurement from "./measurementModel.js";
import {
  validateMeasureDate,
  validateMeasureMeasuredby,
} from "../../utils/Validations.js";

export default async function post(req, res) {
  let measurementData = req.body;
  const errors = validate(measurementData);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const newMeasurements = await Measurement.create(measurementData);
    return res.status(201).json({
      data: measurementData,
    });
  } catch (e) {
    console.log(e);
  }
}

function validate(measureData) {
  let errors = {};
  if (isNaN(measureData.amount)) {
    errors.amount = ["Invalid measure amount"];
  }
  if (!validateMeasureDate(measureData.date)) {
    errors.date = ["Invalid measure date"];
  }
  if (!validateMeasureMeasuredby(measureData.measuredby)) {
    errors.measuredby = ["Invalid name for Measured By"];
    //Only letters
  }
  if (isNaN(measureData.userId)) {
    errors.userId = ["Invalid User ID"];
    //Only numbers and letters
  }

  return errors;
}
