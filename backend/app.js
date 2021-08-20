const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

const connectDB = require('./config/database');
connectDB();

const { PORT } = require('./config/variables');
app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));