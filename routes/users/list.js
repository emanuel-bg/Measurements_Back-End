import User from "./user.js";

async function list(_req, res) {
    const data = await User.find();
    const count = await User.countDocuments();
    res
      .status(200)
      .json({ count, data });
}

export default list;
