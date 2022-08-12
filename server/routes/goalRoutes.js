const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const { protect } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.route("/").get(protect, getGoal).post(protect, setGoal);

// DYNAMIC routes

router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
