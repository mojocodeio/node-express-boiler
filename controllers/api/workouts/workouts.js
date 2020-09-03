const express = require('express')
const router = express.Router()

router.get('/workouts', (req, res) => {
    console.log('workouts route hit')
    res.send({
        workouts: 1,
    })
})

module.exports = router;