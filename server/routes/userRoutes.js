const router = require("express").Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userControllers");

// ROUTES FOR USER REGISTRATION
router.post("/", registerUser);

// ROUTE FOR USER LOGIN
router.post("/login", loginUser);

// ROUTE FOR SINGLE USER
router.get("/me", getUser);

module.exports = router;
