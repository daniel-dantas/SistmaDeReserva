const express = require('express')
const Ambiente = require('../models/Ambiente')

const router = express.Router()

router.post('/create', (req,res) => {
    Ambiente.create(req.body).then(ambiente => {
        return res.send(ambiente)
    })
})

module.exports = router