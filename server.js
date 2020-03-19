require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 5000;

/** controllers */
const auth = require('./controllers/auth');

const app = express();

/** routes */
app.use('/auth', auth);

app.listen(PORT, () => {
    console.log('SERVER RUNNING ON PORT')
})