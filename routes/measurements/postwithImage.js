import { fileURLToPath } from "url";
import path from "path";
import Measurement from "./measurementModel.js";

export default async function postwithImage(req, res) {
  let InsertedData = req.body;

  let message = "Succesful post";
  let errors = {};

  errors.message = "";

  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No se ha seleccionado ninguna imagen.");
    } else {
      const image = req.files.image; // 'image' debe coincidir con el nombre del campo en el formulario
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const date = new Date();
      const utcStr = date.toUTCString();
      const uploadPath = __dirname + "/images/" + utcStr + "-" + image.name;
      InsertedData.imageName = utcStr + "-" + image.name;

      // Guardar la imagen en el servidor
      image.mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).json(response);
        }
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
  try {
    await Measurement.create(InsertedData);
  } catch (e) {
    InsertedData = req.body;
    message = "Error creating de object";
    errors = e;
    res.status(500).json({ message, InsertedData, errors });
  }
  res.status(200).json({ message, InsertedData, errors });
}
