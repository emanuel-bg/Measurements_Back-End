import Measurement from "./measurementModel.js";

export default async function remove(req, res) {
  // TODO validate we have a proper id before use it
  const deletedId = req.params.id;

  try {
    const result = await Measurement.deleteOne({ _id: deletedId });
    console.log(result); // TODO add description or remove console.log

    if (!res.locals.measurement) {
      return res
        .status(200)
        .json({ data: { deletedId } });
    }

    return res
      .status(200)
      .json({ data: { deletedId } });
  } catch (e) {
    console.log(e); // TODO add description to the error and use `error` instead of `e`
    res.status(500); // TODO send proper json response
  }
}
