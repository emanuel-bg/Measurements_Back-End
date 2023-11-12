export default function post(req, res) {
  const response = req.body;
  res.status(200).json(response);
}
