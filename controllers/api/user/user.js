const express = require('express');
const router = express.Router();

// const User = require('../../../models/user')

router.get('/user', (req, res) => {
    const { user } = req.user
    res.send({
        userName: user.userName,
        userId: user._id,
        createdAt: user.createdAt,
    })
})

module.exports = router;