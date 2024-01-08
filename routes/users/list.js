import User from "./userModel.js";

async function list(_req, res) {
  try {
    //filtrar por userId // TODO use English for comments
    const data = await User.find();
    const count = await User.countDocuments();
    res
      .status(200)
      .json({ count, data });
  } catch (e) {
    console.log(e); // TOOD send proper error to FE. Use error instead of `e`
  }
}

export default list;
