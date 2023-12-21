import Measurement from "./measurementModel.js";
async function measureById(req, res, next) {
  const measureId = req.params?.id?.trim();
  if (!measureId) {
    return next({ message: "Measurement not found", status: 404 });
  }
  const data = await Measurement.findById(measureId);
  //sea por current user
  res.locals.measure = data;
  next();
}

export default measureById;
