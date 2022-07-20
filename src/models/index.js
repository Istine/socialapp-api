const { readdirSync } = require("fs");
const { basename: _basename, join } = require("path");
const { DataTypes } = require("sequelize");
const Sequelize = require("sequelize");
const basename = _basename(__filename);
const db = {};

let sequelize;
sequelize = new Sequelize("socialapp", "postgres", "root", {
  dialect: "postgres",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) =>
    console.log("could not connect to database", error.message)
  );

const modules = [require("./user")];
modules.forEach((file) => {
  let model = file;
  model = model(sequelize, DataTypes);

  db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
