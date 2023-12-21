import Measurement from "./measurementModel.js";

export default async function remove(req, res) {
  const deletedId = req.params.id;
  try {
    const result = await Measurement.deleteOne({ _id: deletedId });
    console.log(result);
    if (!res.locals.measurement) {
      return res.status(200).json({ data: { deletedId } });
    }
    return res.status(200).json({ data: { deletedId } });
  } catch (e) {
    console.log(e);
    res.status(500);
  }
}
