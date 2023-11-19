import User from "./userModel.js";

export default async function Login(req, res) {
  try {
    let message = "Succesful Update";
    let errors = {};
    errors.message= "";
    const userData = req.body;
    const users = await User.find();
    const user = await User.findOne({ email: userData.email });
    if (!user) {
      message = "Credenciales Incorrectas";
      errors.message = "El usuario o la contrase;a son incorrectos";
      return res.status(400).json({ message, user, errors });
    }
    const contraseñaValida = await user.comparePassword(userData.password);
    if (!contraseñaValida) {
      message = "Credenciales Incorrectas";
      errors.message = "El usuario o la contrase;a son incorrectos";
      return res.status(400).json({ message, user, errors });
    }
    res.status(200).json({ message, user, errors });
  } catch (e) {
    const user = {};
    const errors = {};
    const message = "Error while trying to log in";
    errors.message = e;
    return res.status(400).json({ message, user, errors });
  }
}
