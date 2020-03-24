const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/login', (req, res) => {
    const { userName } = req.body;
    new User({ userName }).save((err, user) => {
        if (err) {
            res.json(err);
        }

        res.json({
            userId: user._id,
            userName: user.userName,
        });
    });
});

router.post('/logout', (req, res) => {
    res.send({
        userId: '',
        userName: '',
    })
})

module.exports = router;