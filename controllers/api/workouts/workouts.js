const express = require('express');
const router = express.Router();

const Workout = require('../../../models/workout')

router.get('/workouts', (req, res) => {
    const { user } = req.user

    Workout.find({ user_id: user._id }, (err, data) => {
        if (err) {
            res.send({ message: 'ERROR WILL ROBINSON', err })
        } else {
            console.log('data', data)
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
        res.json({ workout })
    })
    .catch(err => {
        res.status(500).send({
            message: 'Sorry having trouble saving workouts',
            err
        })
    })
})

router.put('/workouts/:id', (req, res) => {
    console.log('req.user', req.user);
    const { id } = req.params
    const { difficulty } = req.body
    Workout.findByIdAndUpdate(id, { difficulty }, { new: true }, (err, workout) => {
        if (err) {
            res.status(500).send({
                message: 'Sorry having trouble updating that',
                err
            })
        }

        res.json({ workout })
    })
})

router.delete('/workouts/:id', (req, res) => {
    const { id } = req.params
    Workout.deleteOne({ _id: id }, (err) => {
        if (err) {
            res.status(500).send({
                message: 'Sorry having trouble deleting that',
                err
            })
        }

        res.json({ message: 'Workout deleted' })
    })

})

module.exports = router;