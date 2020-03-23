require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

/** DATABASE CONFIG */
const mongoAtlasUri = process.env.MONGODB_URL || 'mongodb://localhost/weather_data';
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'sample_weatherdata'
};

mongoose.connect(mongoAtlasUri, configOptions);
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('err', () => {
    console.warn('Warning Server', error)
  });

/** controllers */
const auth = require('./controllers/auth');
const weather = require('./controllers/weather');

/** middleware */
app.use(express.static(path.resolve(__dirname, './client/build')))

/** routes */
app.use('/auth', auth);
app.use('/weather', weather);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

module.exports = app;
