const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoal,
  removeGoal,
  updateGoal,
} = require("./../controllers/goalController");

const { protect } = require("./../middleware/authMiddleware");

//Route for getting and setting goals
router.route("/").get(protect, getGoals).post(protect, setGoal);

//Route for updating and removing goals
router.route("/:id").put(protect, updateGoal).delete(protect, removeGoal);

module.exports = router;
