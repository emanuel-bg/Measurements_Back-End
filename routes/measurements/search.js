
import Measurement from "./measurement.js";

async function search(req, res) {
  const searchData = req.body;
  let data;
  let count;
  switch (searchData.selectedAttribute) {
    case "date":
      data = await Measurement.find({ date: { $gt: searchData.search } });

      count = await Measurement.countDocuments({
        date: { $gt: searchData.search },
      });

      res.status(200).json({ count, data });
      break;

    case "amount":
      data = await Measurement.find({ amount: { $gt: searchData.search } });

      count = await Measurement.countDocuments({
        amount: { $gt: searchData.search },
      });

      res.status(200).json({ count, data });
      break;

    default:
      res.status(400).json({ message: "Could not find the measurements" });
      break;
  }
}

export default search;
