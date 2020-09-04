const express = require('express');
const router = express.Router();

const Workout = require('../../../models/workout')

router.get('/workouts', (req, res) => {
    const { user } = req.user
    Workout.find({ user_id: user._id }, (err, data) => {
        if (err) {
            res.send({ message: 'ERROR WILL ROBINSON', err })
        } else {
            res.send({ data })
        }
    })
})

module.exports = router;