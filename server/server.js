const express = require('express');

const app = express();

// import routes
const authRoutes = require('./routes/auth');

// import middleware
app.use('/api', authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Backend server running on port:', port, '.');
});
