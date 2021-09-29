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

// Database
const connectDB = require('./config/database');
connectDB();

// Authentication
const passport = require('passport');
const session = require('express-session');

const { MONGO_STORE_SECRET_KEY } = require('./config/variables');

require('./config/passport-jwt')(passport);

app.use(
  session({
    secret: MONGO_STORE_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

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

const { PORT } = require('./config/variables');
app.listen(PORT, console.log(`Server is listening on port ${PORT}...`));
