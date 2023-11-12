import express from "express";
import Login from "./login.js";

var router = express.Router();

router.post("/login", Login);

export default router;
