import express from "express";
import list from "./list.js";
import post from "./post.js";
import remove from "./remove.js";
import put from "./put.js";
import uploadImage from "./uploadImage.js";
import getOne from "./get_one.js";
import search from "./search.js";
import currentUser from "../../middlewares/currentUser.js";
import modelById from "../../middlewares/modelById.js";
import Measurement from "./measurementModel.js";

var router = express.Router(); // TODO use let or const

router.get("/", currentUser, list);
router.get("/:id", modelById(Measurement, "measurement"), getOne);
router.post("/", post);
router.put("/:id", modelById(Measurement, "measurement"), put);
router.delete("/:id", modelById(Measurement, "measurement"), remove);
router.post("/uploadImage", uploadImage);
router.post("/search", search);

export default router;