const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
    const { userName, password } = req.body.user;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            res.send('Error hashing password with bcrypt')
        }

        let newUser = new User({ userName, password: hash })
        newUser.save()
            .then(user => {
                const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET)
                res.json({ accessToken, user })
            })
            .catch(err => {
                res.status(500).send({
                    message: 'A user with that user name already exists. Please try logging in or creating an account with a different user name. Thank you!',
                    err,
                })
            })
    });
});

router.post('/login', (req, res) => {
    const { userName, password } = req.body.user;

    User.findOne({ userName }, (err, user) => {
        if (!user) {
            res.status(500).send({
                message: 'Could not find user by that user name. Please try again. Thank you!',
                err,
            })
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.status(500).send({
                        message: 'Error checking passwords. Please try again. Thank you!'
                    })
                } else if (!result) {
                    res.status(500).send({
                        message: 'Passwords did not match. Please try again. Thank you!'
                    })
                } else {
                    /** passwords matched, serialize user w/jsonwebtoken */
                    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET)
                    res.json({ accessToken, user })
                }
            });
        }
    });
});

module.exports = router;