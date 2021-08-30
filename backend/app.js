const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

require("dotenv").config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Database
const connectDB = require("./config/database");
connectDB();

// Routes
const resourceRouter = require("./routes/resource.route");
app.use("/api/v1/", resourceRouter);

const categoryRouter = require("./routes/category.route");
app.use("/api/v1/", categoryRouter);

const { PORT } = require("./config/variables");
app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
