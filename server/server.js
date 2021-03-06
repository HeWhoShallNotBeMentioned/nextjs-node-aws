const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// db
mongoose
  .connect(process.env.DATABASE_CLOUD, {})
  .then(() => console.log('db connected'))
  .catch((error) => console.log(error));

// import routes
const authRoutes = require('./routes/auth');

// app middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

// import middleware
app.use('/api', authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Backend server running on port:', port, '.');
});
