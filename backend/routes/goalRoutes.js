const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoal,
  removeGoal,
  updateGoal,
} = require("./../controllers/goalController");

//Route for getting and setting goals
router.route("/").get(getGoals).post(setGoal);

//Route for updating and removing goals
router.route("/:id").put(updateGoal).delete(removeGoal);

module.exports = router;
