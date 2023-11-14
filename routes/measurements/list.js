const data = [
  {
    id: "1",
    amount: "200",
    date: "2023-11-26",
    measuredby: "Emmanuel Barrientos",
    userId: "1",
  },
  {
    id: "2",
    amount: "1000",
    date: "2023-11-26",
    measuredby: "Emmanuel Barrientos",
    userId: "1",
  },
];

function list(_req, res) {
  res.status(200).json({ data });
}

export default list;
