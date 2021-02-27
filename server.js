require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

/** controllers */
const apiRoutes = require('./controllers/api/api');
const auth = require('./controllers/auth');
const lockers = require('./controllers/lockers');

const { authenticateToken } = require('./middleware/authenticateToken');
const app = express();

/** DATABASE CONFIG */
const mongoAtlasUri = process.env.MONGODB_URL || 'mongodb://localhost/weather_data';
const configOptions = {
    useNewUrlParser: true,
    dbName: 'next-express-auth',
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};

mongoose.connect(mongoAtlasUri, configOptions);
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('err', () => {
    console.warn('Warning Server', error)
  });

/** middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, './client/build')));

/** routes */
app.use('/api', authenticateToken, apiRoutes);
app.use('/auth', auth);
app.use('/lockers', lockers)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
