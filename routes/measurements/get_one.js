import Measurement from "./measurementModel.js";

async function getOne(_req, res) {
  const data = res.locals.measurement;
  res.status(200).json({ data });
}

export default getOne;
