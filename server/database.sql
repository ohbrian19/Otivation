DROP TABLE IF EXISTS exercises;
DROP TABLE IF EXISTS profiles;

CREATE TABLE exercises
(
  ID SERIAL PRIMARY KEY,
  user_email text,
  date text,
  category text,
  exercise_name text,
  number_of_sets int,
  weight int,
  unit text,
  note text
);

CREATE TABLE profiles
(
  ID SERIAL PRIMARY KEY,
  name text,
  email text UNIQUE,
  image text,
  gender text,
  height int,
  weight int
);

INSERT INTO exercises
  (user_email, date, category, exercise_name, number_of_sets, weight, unit, note)
VALUES
  ('ohbrian12@gmail.com', '2020-11-11', 'Chest', 'Bench-Press', 3, 100, 'lb', 'first day at gym');
INSERT INTO exercises
  (user_email, date, category, exercise_name, number_of_sets, weight, unit, note)
VALUES
  ('ohbrian12@gmail.com', '2020-11-12', 'Chest', 'Bench-Press', 4, 100, 'lb', 'second day at gym');
INSERT INTO exercises
  (user_email, date, category, exercise_name, number_of_sets, weight, unit, note)
VALUES
  ('ohbrian@gmail.com', '2020-11-12', 'Arms', 'Bench-Press', 5, 100, 'lb', 'seecond workout at gym');


