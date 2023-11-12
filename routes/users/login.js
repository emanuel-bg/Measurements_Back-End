const userData = {
  name: "Emanuel Barrientos Guerrero",
  username: "Emanuel",
  email: "ema@gmail.com",
  password: "Ema123!",
};

export default function Login(req, res) {
  let response;
  const user = req.body;
  if (user.email === userData.email && user.password === userData.password) {
    response = userData;
  } else {
    response = { Error: "Error while triying to log in" };
  }
  res.json(response);
}
