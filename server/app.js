import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';

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

// default route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to PostIt API v1' });
});

// Home route
app.get('/api/v1/home', (req, res) => {
  res.json({ message: 'Welcome to PostIt API v1' });
});

// Route Middleware

export default app;
