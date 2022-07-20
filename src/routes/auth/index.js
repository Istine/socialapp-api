import { body } from "express-validator";
import { errorsWatcher } from "../../middleware/validators";

import express from "express";
import Users from "../../controllers";

const Router = express.Router();

Router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  errorsWatcher,
  async (req, res, next) => {
    try {
      const user = await new Users(req.body).build().create();
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

export { Router as Auth };
