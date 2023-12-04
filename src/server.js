// Import required modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/DBConfig');

// Create an instance of Express
const app = express();

// dependencies
const authRoutes = require('./api/routes/auth.route');
const adopterRoutes = require('./api/routes/adopter.route');
const petRoutes = require('./api/routes/pet.route');
const applicationRoutes = require('./api/routes/application.route');

// connect to database
connectToDb();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/adopter', adopterRoutes);
app.use('/api/pet', petRoutes);
app.use('/api/application', applicationRoutes);

// start server
app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
