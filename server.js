const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello node-express-boiler')
})

app.listen(5000, () => {
    console.log('SERVER RUNNING ON PORT')
})