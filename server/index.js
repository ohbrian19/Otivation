const express = require("express");
// const config = require("config");
// const bodyParser = require("body-parser");

const exercises = require("./routes/exercises");

const app = express();

app.use(express.json());
// app.use(bodyParser.json());
app.use("/exercises", exercises);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
