const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('Hello, I am the register route')
});

router.post('/login', (req, res) => {
    res.send('Hello, I am the login route')
});

module.exports = router;