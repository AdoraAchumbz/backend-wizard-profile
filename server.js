const express = require('express');
const dotenv = require('dotenv');
const { getProfile } = require('./controllers/me');

// Load environment variables
dotenv.config({ path: './config/.env' });

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Phurhard Backend API is running 🚀');
});

// Profile route
app.get('/me', getProfile);

// Start server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';

app.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}`);
});