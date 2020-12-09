const express = require('express');
const router = express.Router();

const Workout = require('../../../models/workout')

/** GET all workouts */
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

/** GET workout by id */
router.get('/workouts/:id', (req, res) => {
    console.log('req.user', req.user);
    const { id } = req.params
    Workout.findById(id, (err, workout) => {
        if (err) {
            res.status(500).send({
                message: 'Sorry having trouble finding that workout',
                err
            })
        }

        res.json({ workout })
    })
})

/** POST new workout */
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

/** PUT update workout by id */
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

/** DELETE workout by id */
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