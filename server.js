require('dotenv').config();
const PORT = process.env.PORT || 5000;

/** ESTABLISH DATABASE CONNECTION */
require('./database');

const express = require('express');
const app = express();

/** controllers */
const auth = require('./controllers/auth');
const weather = require('./controllers/weather')

/** routes */
app.use('/auth', auth);
app.use('/weather', weather);

app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT:' + PORT);
});