// Register User

const registerUser = async (req, res) => {
  res.status(200).json({ msg: "User registration" });
};

// Login User
const loginUser = async (req, res) => {
  res.status(200).json({ msg: "User Login" });
};

// Get Currently Login User
const getUser = async (req, res) => {
  res.status(200).json({ msg: "User Getting" });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
