const pool = require("./db");

const getAllExercises = (request, response) => {
  const { user } = request.params;
  pool.query(
    "SELECT * FROM exercises WHERE user_email = $1",
    [user],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    }
  );
};

const getExercisesByDate = (request, response) => {
  const { date, user } = request.params;
  pool.query(
    "SELECT * FROM exercises WHERE date = $1 AND user_email = $2",
    [date, user],
    (error, results) => {
      if (error) throw error;
      response.status(200).json(results.rows);
    }
  );
};

const addExercise = (request, response) => {
  const {
    user_email,
    date,
    category,
    exercise_name,
    number_of_sets,
    weight,
    unit,
    note,
  } = request.body;
  pool.query(
    "INSERT INTO exercises (user_email, date, category, exercise_name, number_of_sets, weight, unit, note) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [
      user_email,
      date,
      category,
      exercise_name,
      number_of_sets,
      weight,
      unit,
      note,
    ],
    (error, results) => {
      if (error) throw error;
      response.status(201).send(`Exercise added`);
    }
  );
};

const updateExercise = (request, response) => {
  const id = parseInt(request.params.id);
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
    "UPDATE exercises SET date = $1, category = $2, exercise_name = $3, number_of_sets = $4, weight = $5, unit = $6, note = $7 WHERE id = $8",
    [date, category, exercise_name, number_of_sets, weight, unit, note, id],
    (error, results) => {
      if (error) throw error;
      response.status(200).send("Exercise Updated");
    }
  );
};

const deleteExercise = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("DELETE FROM exercises WHERE id = $1", [id], (error, results) => {
    if (error) throw error;
    response.status(200).send(`Exercise deleted`);
  });
};

module.exports = {
  getAllExercises,
  getExercisesByDate,
  addExercise,
  updateExercise,
  deleteExercise,
};
