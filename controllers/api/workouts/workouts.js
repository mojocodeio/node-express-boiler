const express = require('express');
const router = express.Router();

const Workout = require('../../../models/workout')

router.get('/workouts', (req, res) => {
    const { user } = req.user
    console.log('user', user)
    Workout.find({ user_id: user._id }, (err, data) => {
        if (err) {
            res.send({ message: 'ERROR WILL ROBINSON', err })
        } else {
            res.send({ data })
        }
    })
})

router.post('/workouts', (req, res) => {
    const { user } = req.user
    let newWorkout = new Workout({
        user_id: user._id
    })

    newWorkout.save()
    .then(workout => {
        console.log('workout', workout)
        res.json({ workout })
    })
    .catch(err => {
        res.status(500).send({
            message: 'Sorry having trouble saving workouts',
            err
        })
    })
})

module.exports = router;