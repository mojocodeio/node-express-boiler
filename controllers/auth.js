const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/login', (req, res) => {
    const { userName } = req.body;
    new User({
        userName,
    }).save((err, user) => {
        if (err) {
            console.log('err:', err);
            res.json(err);
        }
        console.log('weather:', user);
        res.json(user);
    });
});

module.exports = router;