const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Request session:', req.session.cookie)
    res.send('hello auth route')
})

router.post('/register', (req, res) => {
    res.send('Hello, I am the register route')
});

router.post('/login', (req, res) => {
    res.send('Hello, I am the login route')
});

module.exports = router;