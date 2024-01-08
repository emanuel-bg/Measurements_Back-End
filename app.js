
import express from "express";
import indexRouter from "./routes/index.js";
import measurementsRouter from "./routes/measurements/index.js";
import usersRouter from "./routes/users/index.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import mongoose, { mongo } from "mongoose";
import verifyToken from "./middlewares/verifyToken.js";
import currentUser from "./middlewares/currentUser.js";
import connectDatabase from "./db.js";
const  app = express();

const measurementsimages = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "routes/measurements/images"
);

const usersimages = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "routes/users/images"
);

connectDatabase()
const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongo db conection failed"));

db.on("open", async () => {
  app
    .use(fileUpload())
    .use(cors())
    .use(express.json())
    .use("/", indexRouter)
    .use("/measurements", verifyToken, currentUser, measurementsRouter)
    .use("/users", usersRouter)
    .use("/measurements/images", express.static(measurementsimages))
    .use("/users/images", express.static(usersimages))

    .use(function (req, res, next) {
      next(createError(404));
    })
    .use(function (err, req, res, next) {
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      res.status(err.status || 500);
      res.json({ message: err.message });
    });
})
export default app;
