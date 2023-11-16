export default function put(req, res) {


  const response = req.body;
  res.status(200).json(response);
}
