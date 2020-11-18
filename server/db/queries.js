const pool = require("./db");

const getExercisesByDate = (request, response) => {
  const { date } = request.params;
  pool.query(
    "SELECT * FROM exercises WHERE date = $1",
    [date],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    }
  );
};

const addExercise = (request, response) => {
  const {
    date,
    category,
    exercise_name,
    number_of_sets,
    weight,
    unit,
    note,
  } = request.body;

  pool.query(
    "INSERT INTO exercises (date, category, exercise_name, number_of_sets, weight, unit, note) VALUES ($1, $2, $3, $4, $5, $6, $7)",
    [date, category, exercise_name, number_of_sets, weight, unit, note],
    (error, results) => {
      if (error) throw error;
      response.status(201).send(`Exercise added`);
    }
  );
};

// update exercise
const updateExercise = (request, response) => {};

// delete exercise
const deleteExercise = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM exercises WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`Exercise deleted`);
  });
};

module.exports = {
  getExercisesByDate,
  addExercise,
  updateExercise,
  deleteExercise,
};
