import cors from "cors";
import express from "express";
import config from "./config/index";
import Auth from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(config.prefix, Auth);

app.use((error, req, res, next) => {
  const err = {};
  err.message = error.message;
  err.code = error.statusCode;
  if (res.headerSent) next(err);
  else return res.status(500).json(err);
});

app.use((error, req, res, next) => {
  if (config.environment !== "production") res.status(error.code).send("Hello");
});

app.listen(config.port, console.log("Listening on PORT", config.port));
