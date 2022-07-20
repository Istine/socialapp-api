import Sequelize from "sequelize";

const sequelize = new Sequelize("socialapp", "postgres", "root", {
  dialect: "postgres",
});

export const initDB = () => {
  sequelize
    .authenticate()
    .then(() => console.log("connected to database"))
    .catch((error) =>
      console.log("could not connect to database", error.message)
    );
};
