const userModel = require("../model/UserModel");

const { createSecretToken } = require("../util/SecretToken");

module.exports.signup = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already registered" });
    }

    const user = await userModel.create({
      email,
      username,
      password,
      createdAt,
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};
