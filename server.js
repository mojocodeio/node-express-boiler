require('dotenv').config();
const PORT = process.env.PORT || 5000;
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

/** controllers */
const auth = require('./controllers/auth');
const weather = require('./controllers/weather');

/** middleware */
app.use(express.static(path.resolve(__dirname, './client/build')))

/** routes */
app.use('/auth', auth);
app.use('/weather', weather);

app.get('*', (req, res) => {
    console.log('req made!!')
    res.sendFile(path.resolve(__dirname, '..client/build', 'index.html'))
});

mongoose.connect(mongoAtlasUri, configOptions)
    .then(() => {
        console.log('Database connection established!');

        app.listen(PORT, () => {
            console.log('SERVER RUNNING ON PORT:' + PORT);
        });
    })
    .catch(err => console.log(err))
