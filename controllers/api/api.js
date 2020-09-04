const express = require('express')
const router = express.Router();

/** middleware */
// const { authenticateToken } = require('../middleware/authenticateToken')

/** protected routes */
const userRoutes = require('./user/user');
const workoutRoutes = require('./workouts/workouts');

router.use(userRoutes)
router.use(workoutRoutes)

module.exports = router;