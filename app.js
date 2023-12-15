import express from "express";
import indexRouter from "./routes/index.js";
import mesurementsRouter from "./routes/measurements/index.js";
import usersRouter from "./routes/users/index.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config"
import mongoose, { mongo } from "mongoose";
import verifyToken from "./middlewares/verifyToken.js";
var app = express();

// view engine setup

const measurementsimages = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "routes/measurements/images"
);
const usersimages = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "routes/users/images"
);


mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongo db conection failed"));

db.on("open", async () => {
  app
    .use(fileUpload())
    .use(cors())
    .use(express.json())
    .use("/", indexRouter)
    .use("/measurements",verifyToken, mesurementsRouter)
    .use("/users", usersRouter)
    .use("/measurements/images", express.static(measurementsimages))
    .use("/users/images", express.static(usersimages))

    .use(function (req, res, next) {
      next(createError(404));
    })
    .use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.json({message:err.message})
      res.render("error");
    });
});
export default app;
