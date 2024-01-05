import express from "express";
import Login from "./login.js";
import list from "../users/list.js";
import post from "./post.js";
import verifytoken from "../../middlewares/verifyToken.js";
import currentUser from "../../middlewares/currentUser.js";
import Logout from "./logout.js";
import me from "./me.js";

var router = express.Router(); // TODO use let or const depending on the usage

router.post("/login", Login);
router.post("/logout", verifytoken, currentUser, Logout);
router.post("/", post);
router.post("/me", verifytoken, me);
router.get("/", verifytoken, list);

export default router;
