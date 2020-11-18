DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS users;

CREATE TABLE exercises
(
  ID SERIAL PRIMARY KEY,
  date text,
  category text,
  exercise_name text,
  number_of_sets int,
  weight int,
  unit text,
  note text
);

CREATE TABLE users
(
  ID SERIAL PRIMARY KEY,
  email text,
  password text
);

INSERT INTO exercises
  (date, category, exercise_name, number_of_sets, weight, unit, note)
VALUES
  ('2020-11-11', 'Chest', 'Bench-Press', 3, 100, 'lb', 'first day at gym');
INSERT INTO exercises
  (date, category, exercise_name, number_of_sets, weight, unit, note)
VALUES
  ('2020-11-12', 'Chest', 'Bench-Press', 4, 100, 'lb', 'second day at gym');
INSERT INTO exercises
  (date, category, exercise_name, number_of_sets, weight, unit, note)
VALUES
  ('2020-11-12', 'Arms', 'Bench-Press', 5, 100, 'lb', 'seecond workout at gym');
