const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const USER = require("../models/userModel");

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ msg: "Please add all fields" });
  }

  //   Check if the user already exists
  const userExists = await USER.findOne({
    email,
  });

  if (userExists) {
    res.status(400).json({ msg: "User already exists" });
  }

  // Hash the user password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the new user
  const user = await USER.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ msg: "User not Created" });
  }
});

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Check for user Email
  const user = await USER.findOne({ email });

  // compare password

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json({ msg: "Invalid Credentials" });
  }
};

// Get Currently Login User

const getUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};
module.exports = {
  registerUser,
  loginUser,
  getUser,
};
