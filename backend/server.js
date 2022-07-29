const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

//Middleware for setting request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

//Middleware for error handling
app.use(errorHandler);

app.listen(port, () => console.log(`Server start on port: ${port}`));
