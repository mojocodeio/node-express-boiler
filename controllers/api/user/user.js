const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    const { user } = req.user
    res.send({ user })
})

module.exports = router;