/* eslint-disable no-undef */
import { config as envConfig } from "dotenv";
envConfig();

export default {
  url: process.env.PUBLIC_URL,
  port: process.env.PORT,
  secretKey: process.env.JWT_SECRET_KEY,
  environment: process.env.NODE_ENV,
  prefix: process.env.BASE,
};
