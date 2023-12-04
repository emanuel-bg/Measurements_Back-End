import Measurement from "./measurementModel.js";

export default async function remove(req, res) {
  const deletedId = req.params.id;
  try {
    const result = await Measurement.deleteOne({ _id: deletedId });
    console.log(result);
    return res.status(200).json({deletedId });
  } catch (e) {
    console.log(e);
  }
}
