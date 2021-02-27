const express = require('express')
const router = express.Router()
const Locker = require('../models/locker')

router.get('/', (req, res) => {
    Locker.find({}, (err, data) => {
        if(err) {
            res.send({ message: 'ERROR_WILL_ROBINSON' })
        } else {
            console.log('data', data)
            res.send(data)
        }
    })
})

module.exports = router
