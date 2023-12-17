import Measurement from "./measurementModel.js";

async function get_one(req, res) {
  debugger
  const Id = req.params.id.trim();
  const data = await Measurement.findById(Id)
  res.status(200).json({ data });
}

export default get_one;
