const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

///////////////////////////////// MONGODB //////////////////////////////////
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB connection established successfully");
});

///////////////////////////////// APP ROUTES ///////////////////////////////

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, function () {
	console.log(`Server running on port: ${port}`);
});
