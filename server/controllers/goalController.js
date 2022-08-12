const Goal = require("../models/goalModel");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// GET GOALS
const getGoal = async (req, res) => {
  try {
    const goal = await Goal.find({ user: req.user.id });
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// SET GOALS

const setGoal = async (req, res) => {
  const { text } = req.body;

  try {
    const goal = await Goal.create({
      text,
      user: req.user.id,
    });
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Update goal
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// DELETE A Goal
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
