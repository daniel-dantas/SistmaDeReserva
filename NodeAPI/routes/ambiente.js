const express = require('express')
const Reserva = require('../models/Ambiente')

const router = express.Router()

router.get('/', (req,res)=>{
    return res.send('lista de ambientes')
})

module.exports = router