const express = require('express');
const router = express.Router();
const Weather = require('../models/weather');

router.get('/', (req, res) => {
    new Weather({ name: 'Joey D' }).save((err, weather) => {
        if (err) {
            console.log('err:', err);
            res.json(err);
        }
        console.log('weather:', weather);
        res.json(weather);
    });
});

module.exports = router;