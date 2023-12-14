import express from "express";
import Login from "./login.js";
import list from "../users/list.js";
import post from "./post.js";
import verifytoken from "../../middlewares/verifyToken.js";


var router = express.Router();

router.post("/login", Login);
router.post("/", post);
router.get("/",verifytoken,list)

export default router;
