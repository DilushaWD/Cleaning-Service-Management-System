// /backend/app.js
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Use CORS middleware to allow cross-origin requests
app.use(cors());

app.use(express.json());
app.use(bookingRoutes);

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.error('Database sync failed:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
