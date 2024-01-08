import Measurement from "./measurementModel.js";

export default async function put(req, res) {
  const updatedId = req.params?.id;
  let updatedData = req.body;
  updatedData.userId = res.locals.currentUser.id.toString();
  updatedData.username = res.locals.currentUser.username;

  if (!res.locals.measurement) {
    return res
      .status(400) // TODO change status to 404
      .json({ error: "The measurement does'nt exist" });
  }

  try {
    await Measurement.updateOne(
      { _id: updatedId },
      {
        $set: { // TODO update this so we can use:
          // $set: updatedData instead of manually setting each property
          amount: updatedData.amount,
          date: updatedData.date,
          measuredby: updatedData.measuredby,
          userId: updatedData.userId,
          imageName: updatedData.imageName,
          updated_at: updatedData.updated_at,
          username: updatedData.username,
        },
      }
    );
  } catch (e) { // TODO use `error` instead of `e`
    updatedData = req.body;
    message = "Error updating de object";
    errors = e; // TODO send proper error response
  }

  res
    .status(200)
    .json({ data: updatedData });
}
