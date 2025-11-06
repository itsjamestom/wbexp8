require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const donationRoutes = require('./routes/donationRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Atlas connected'))
  .catch(err => console.log('❌ Connection error:', err));

app.use('/api/donations', donationRoutes);

app.listen(5000, () => console.log('🚀 Server running on port 5000'));

