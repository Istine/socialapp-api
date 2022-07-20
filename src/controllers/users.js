import bcrpyt from "bcrypt";
import Models from "../models/index";

class Users {
  constructor({
    firstName = "",
    lastName = "",
    email = "",
    password = "",
    publicName = "",
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.publicName = publicName;
    this.user = null;
  }

  build = () => {
    const user = {
      firstName: this.firstName.trim().toLowerCase(),
      lastName: this.lastName.trim().toLowerCase(),
      email: this.email.trim(),
      password: this.hash(this.password),
      publicName: this.publicName.trim().toLowerCase(),
    };
    this.user = user;
    return this;
  };

  hash = (password) => {
    const hashedPassword = bcrpyt.hashSync(password, 10);
    return hashedPassword;
  };

  create = async () => {
    try {
      const newUser = await Models.User.create(this.user);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export { Users };
