import Measurement from "./measurementModel.js";

async function list(_req, res) {
  const data = await Measurement.find();
  const count = await Measurement.countDocuments();
  res.status(200).json({ count, data });
}

export default list;
