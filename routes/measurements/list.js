import Measurement from "./measurementModel.js";

async function list(_req, res) {
  const user = res.locals.currentUser
  const data = await Measurement.find({ userId: user.id });
  const count = await Measurement.countDocuments({ userId: user.id });

  res
    .status(200)
    .json({ count, data });
}

export default list;
