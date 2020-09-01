const express = require('express');
const bcrypt = require('bcrypt');
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

router.post('/register', (req, res) => {
    const {
        userName,
        password,
    } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            console.log('err', err)
            res.send('Error hashing password with bcrypt')
        }

        let user = new User({ userName, password: hash })
        user.save()
            .then(data => res.send(data))
            .catch(err => res.send(err))
    });
});

router.post('/login', (req, res, next) => {
    const {
        userName,
        password,
    } = req.body;

    User.findOne({ userName }, (err, user) => {
        if (err) {
            console.log('err', err)
            res.send('Could not find user by that userName')
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.log('err', err)
                res.send('Error checking passwords')
            } else if (!result) {
                res.send('Passwords did not match')
            } else {
                console.log('user', user)
                res.send(user)
            }
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