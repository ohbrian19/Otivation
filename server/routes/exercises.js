const express = require("express");
const router = express.Router();
const {
  getExercisesByDate,
  addExercise,
  updateExercise,
  deleteExercise,
} = require("../db/queries");

router.get("/:date", getExercisesByDate);

router.post("/", addExercise);

router.put("/", updateExercise);

router.delete("/", deleteExercise);

module.exports = router;
