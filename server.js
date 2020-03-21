require('dotenv').config();
const PORT = process.env.PORT || 5000;

/** ESTABLISH DATABASE CONNECTION */
require('./database');

const express = require('express');

const app = express();

/** controllers */
const auth = require('./controllers/auth');

/** routes */
app.use('/auth', auth);

app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT');
});