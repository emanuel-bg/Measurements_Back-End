import Measurement from "./measurement.js";

async function measureById(req, res, next) {
  const measureId = req.params?.id?.trim();

  if (!measureId) {
    return next({ message: "Measurement not found", status: 404 });
  }

  try {
    const data = await Measurement.findById(measureId);
    res.locals.measure = data;
    next();
  } catch (error) {
   
    next(error); 
   
  }
}

export default measureById;
