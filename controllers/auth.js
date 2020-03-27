const express = require('express');
const router = express.Router();
const User = require('../models/user');

const generateErrorMessageByCode = code => {
    switch(code) {
        case 11000:
            return 'Sorry, That username is already taken.'
        default:
            return ''
    }
}

router.post('/login', (req, res, next) => {
    const { userName } = req.body;
    new User({ userName }).save((err, user) => {
        if (err) {
            const newError = new Error(generateErrorMessageByCode(err.code));
            next(newError)
        } else {
            res.json({
                userId: user._id,
                userName: user.userName,
            });
        }

    });
});

router.post('/logout', (req, res) => {
    res.send({
        userId: '',
        userName: '',
    })
})

module.exports = router;