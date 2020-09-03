const express = require('express')
const router = express.Router();

/** middleware */
// const { authenticateToken } = require('../middleware/authenticateToken')

/** protected routes */
const workoutRoutes = require('./workouts/workouts');

router.use(workoutRoutes)

module.exports = router;