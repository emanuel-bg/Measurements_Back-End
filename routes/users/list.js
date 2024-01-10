import User from "./user.js";

async function list(_req, res) {
  const users = await User.find().limit(100);
    const publicInfo = users.map(user => {
      return user.public();
    });

    const count = await User.countDocuments();
    res
      .status(200)
      .json({ count,data:publicInfo});
}

export default list;
