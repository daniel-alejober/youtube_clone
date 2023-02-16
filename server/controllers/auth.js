import bcrypt from "bcrypt";
import User from "../models/User.js";
import generatedJWT from "../jwt/generatedJWT.js";

const signup = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const userExisting = await User.findOne({ email });
    if (userExisting) {
      const error = new Error("This email is already in use");
      return res.status(400).json({ message: error.message });
    }

    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password, salt);
    await User.create({
      email,
      name,
      password: newPassword,
    });
    res.status(200).json({ success: true, message: "User has been created!!" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const error = new Error(
        "There is no an account associated to this email"
      );
      return res.status(400).json({ message: error.message });
    }
    const confirmPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!confirmPassword) {
      const error = new Error("This password is wrong");
      return res.status(400).json({ message: error.message });
    }
    const token = generatedJWT(user._id);
    //*res.cookie ya viene integrado con express, recibe nombre,valor,y opciones de seguridad
    //*en las opciones de seguridad podemos poner
    //*{ secure: process.env.NODE_ENV, httpOnly:true, maxAge:Tiempo expira}

    const { password, ...others } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, //*24hrs
      })
      .status(200)
      .json(others);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const signinGoogle = () => {};

export { signup, signin, signinGoogle };
