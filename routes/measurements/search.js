// TODO use let or const for variables.
import Measurement from "./measurementModel.js";

async function search(req, res) {
  const searchData = req.body;

  switch (searchData.selectedAttribute) {
    case "date":
      var data = await Measurement
        .find({ date: { $gt: searchData.search } });

      var count = await Measurement
        .countDocuments({
          date: { $gt: searchData.search },
        });

      res
        .status(200)
        .json({ count, data });
      break;

    case "amount":
      var data = await Measurement
        .find({ amount: { $gt: searchData.search } });

      var count = await Measurement
        .countDocuments({
          amount: { $gt: searchData.search },
        });

      res
        .status(200)
        .json({ count, data });
      break;

    default:
      res
        .status(400)
        .json({ message: "Could not find the measurements" });
      break;
  }
}

export default search;
