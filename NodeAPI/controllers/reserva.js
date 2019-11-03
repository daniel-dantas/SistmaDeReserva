const express = require('express')
const Reserva = require('../models/Reserva')

const router = express.Router()

router.get('/', (req,res)=>{
    return res.send('lista de reservas')
})

module.exports = router