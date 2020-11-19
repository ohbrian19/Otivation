const express = require("express");
const router = express.Router();

const {
  getAllExercises,
  getExercisesByDate,
  addExercise,
  updateExercise,
  deleteExercise,
} = require("../db/queries");

router.get("/", getAllExercises);

router.get("/:date", getExercisesByDate);

router.post("/", addExercise);

router.put("/:id", updateExercise);

router.delete("/:id", deleteExercise);

module.exports = router;
