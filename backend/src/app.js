
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./models/db');

require('dotenv').config();

connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/crisis', require('./routes/crisisRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
                