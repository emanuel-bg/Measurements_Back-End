import { fileURLToPath } from "url";
import path from "path";

export default function postwithImage(req, res) {
  const response = req.body;
  try {
    
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No se ha seleccionado ninguna imagen.");
    } else {
      const image = req.files.image; // 'image' debe coincidir con el nombre del campo en el formulario
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const uploadPath = path.join(
        __dirname,
        "/images/",
         image.name
      );

      // Guardar la imagen en el servidor
      image.mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).json(response);
        }
        res.status(200).json(response)
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}