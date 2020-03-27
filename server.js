require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
// const session = require('express-session');
const app = express();

/** DATABASE CONFIG */
const mongoAtlasUri = process.env.MONGODB_URL || 'mongodb://localhost/weather_data';
const configOptions = {
    useNewUrlParser: true,
    dbName: 'sample_weatherdata',
    useCreateIndex: true,
    useUnifiedTopology: true,
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, './client/build')));

/** Express session still needs to be set up */
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'secret',
//   name: 'sid',
//   saveUninitialized: false,
//   resave: false,
//   cookie: {
//     maxAge: 1000*60*60*2,
//     sameSite: true,
//   }
// }));

/** routes */
app.use('/auth', auth);
app.use('/weather', weather);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
});

module.exports = app;
