const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

require('dotenv').config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const Chance = require('chance');
const chance = Chance();

// Database
const { connectDB } = require('./config/database');
connectDB();

// Authentication
const passport = require('passport');

require('./config/passport-jwt')(passport);

app.use(passport.initialize());
app.use(passport.session());

// Routes
const basePath = '/api/v1/';
app.use(basePath, require('./routes/auth.route'));

// Protected routes
app.use(
  basePath,
  passport.authenticate('jwt', { session: false }),
  require('./routes/resource.route'),
  require('./routes/category.route')
);

// Error handler middleware
app.use(require('./middlewares/errorHandler.middleware'));

let { PORT } = require('./config/variables');
if (process.env.NODE_ENV === 'test') {
  PORT = chance.integer({ min: 3001, max: 9999 });
}
const server = app.listen(
  PORT,
  console.log(`Server is listening on port ${PORT}...`)
);

module.exports = { app, server };
