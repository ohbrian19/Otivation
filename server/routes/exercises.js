const express = require("express");
const router = express.Router();

const {
  getAllExercises,
  getExercisesByDate,
  addExercise,
  updateExercise,
  deleteExercise,
} = require("../db/queries");

router.get("/:user", getAllExercises);

router.get("/:date/:user", getExercisesByDate);

router.post("/", addExercise);

router.put("/:id", updateExercise);

router.delete("/:id", deleteExercise);

module.exports = router;
