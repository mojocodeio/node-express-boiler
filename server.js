require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const mongoose = require('mongoose');
const app = express();

/** DATABASE CONFIG */
const mongoAtlasUri = process.env.MONGODB_URL || 'mongodb://localhost/weather_data';
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'sample_weatherdata'
};

/** controllers */
const auth = require('./controllers/auth');
const weather = require('./controllers/weather');

/** routes */
app.use('/auth', auth);
app.use('/weather', weather);
console.log('Hello nodemon and concurrently hello hlel');

mongoose.connect(mongoAtlasUri, configOptions)
    .then(() => {
        console.log('Database connection established!');

        app.listen(PORT, () => {
            console.log('SERVER RUNNING ON PORT:' + PORT);
        });
    })
    .catch(err => console.log(err))
