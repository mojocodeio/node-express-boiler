require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const mongoose = require('mongoose');

/** ESTABLISH DATABASE CONNECTION */
const dbUri = process.env.MONGODB_URL || 'mongodb://localhost/weather_data';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'sample_weatherdata'
};

const app = express();

/** controllers */
const auth = require('./controllers/auth');
const weather = require('./controllers/weather')

/** routes */
app.use('/auth', auth);
app.use('/weather', weather);

mongoose.connect(dbUri, options)
    .then(() => {
        console.log('Database connection established!');

        app.listen(PORT, () => {
            console.log('SERVER RUNNING ON PORT:' + PORT);
        });
    })
    .catch(err => console.log(err))
