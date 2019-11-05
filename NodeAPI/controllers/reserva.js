const express = require('express')
const Reserva = require('../models/Reserva')

const router = express.Router()

router.post('/create', (req,res) => {
   Reserva.create(req.body).then(reserva => {
       return res.send(reserva)
   }).catch(erro => {
       return res.send(null)
   })
})

module.exports = router