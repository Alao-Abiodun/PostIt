const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');

dotenv.config();

const app = express();

// Secure HTTP Headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Enable CORS
app.use(cors());

// set view engines
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import all routes
const { userRoute } = require('./routes/user.route');
const { groupRoute } = require('./routes/group.route');

// default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to PostIt API v1' });
});

// Home route
app.get('/api/v1/home', (req, res) => {
  res.json({ message: 'Welcome to PostIt API v1' });
});

// User route
app.use('/api/v1/users', userRoute);

// Group route
app.use('/api/v1/group', groupRoute);

// Route Middleware
module.exports = app;
