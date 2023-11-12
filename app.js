import express from "express";
import indexRouter from "./routes/index.js";
import mesurementsRouter from "./routes/measurements/index.js";
import usersRouter from "./routes/users/index.js"
import cors from "cors"
var app = express();

// view engine setup

app
  .use(cors())
  .use(express.json())
  .use("/", indexRouter)
  .use("/measurements", mesurementsRouter)
  .use("/users",usersRouter)
  .use(function (req, res, next) {
    next(createError(404));
  })
  .use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });

export default app;
