const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
    const { userName, password } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.log('err', err)
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
                    message: 'A user with that user name already exists.',
                    err,
                })
            })
    });
});

router.post('/login', (req, res, next) => {
    const { userName, password } = req.body;

    User.findOne({ userName }, (err, user) => {
        if (!user) {
            res.status(500).send({
                message: 'Could not find user by that userName',
                err,
            })
        } else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.send('Error checking passwords')
                } else if (!result) {
                    res.send('Passwords did not match')
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