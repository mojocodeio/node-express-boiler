const express = require('express')
const router = express.Router()
const Locker = require('../models/locker')

router.get('/', async (req, res) => {
    try {
        const { page, limit } = req.query
        const lockerData = await Locker.paginate(
            { isAvailable: true },
            {
                limit,
                offset: page * limit
            }
        )
        res.send(lockerData)
    } catch(error) {
        res.send({ error: 'Sorry having trouble getting lockers' })
    }

})

router.get('/:page')

module.exports = router
