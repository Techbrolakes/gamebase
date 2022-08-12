const Goal = require("../models/goalModel");

// GET GOALS
const getGoal = async (req, res) => {
  try {
    const goal = await Goal.find();
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
    });
    res.status(200).json(goal);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const updateGoal = async (req, res) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(400).json({ msg: err.message });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json(goal);
  } catch (error) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
