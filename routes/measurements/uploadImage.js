
import { fileURLToPath } from "url";
import path from "path";

export default function uploadImage(req, res) {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res
        .status(400)
        .send("No se ha seleccionado ninguna imagen."); // TODO respond with json
    }

    const image = req.files.image; // 'image' debe coincidir con el nombre del campo en el formulario
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const date = new Date();
    const utcStr = date.toUTCString();
    const uploadPath = __dirname + "/images/" + utcStr + "-" + image.name;

    // Guardar la imagen en el servidor
    image.mv(uploadPath, (err) => {
      if (err) {
        return res
          .status(500)
          .send(err); // TODO respond with JSON
      }

      res.send("Imagen subida con éxito"); // TODO respond with json and add status
    });
  } catch (err) {
    console.error(err); // TOD add description to the error
    res
      .status(500)
      .send(err); // TODO respond with JSON
  }
}
