const express = require('express')
const router = express.Router();

/** protected routes */
const userRoutes = require('./user/user');
const workoutRoutes = require('./workouts/workouts');

router.use(userRoutes)
router.use(workoutRoutes)

module.exports = router;