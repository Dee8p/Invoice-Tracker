const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json()); // for parsing application/json

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5432;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
    await sequelize.sync({ alter: true }); // sync models with DB
  } catch (error) {
    console.error('Unable to connect to DB:', error);
  }
});
