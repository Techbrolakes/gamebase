const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const router = require("express").Router();

router.route("/").get(getGoal).post(setGoal);

// DYNAMIC routes

router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;
