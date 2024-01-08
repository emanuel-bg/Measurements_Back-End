
import { fileURLToPath } from "url";
import path from "path";

export default function uploadImage(req, res) {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res
        .status(400)
        .json({message:"No image found"});
    }

    const image = req.files.image;
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const date = new Date();
    const utcStr = date.toUTCString();
    const uploadPath = __dirname + "/images/" + utcStr + "-" + image.name;

    // Save image on server
    image.mv(uploadPath, (err) => {
      if (err) {
        return res
          .status(500)
          .json({message:"Error saving the image in the server"})
      }

      res.status(200).json({message:"Image was upload succesfully"})
    });
  } catch (err) {
    console.error("Error trying to upload the image: ", err); 
    res
      .status(500)
      .json({message:"Error trying to upload the image: "+err});
  }
}
