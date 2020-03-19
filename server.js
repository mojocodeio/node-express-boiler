const express = require('express');

/** controllers */
const auth = require('./controllers/auth');

const app = express();

/** routes */
app.use('/auth', auth);

app.listen(5000, () => {
    console.log('SERVER RUNNING ON PORT')
})