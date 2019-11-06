const express = require('express')
const Reserva = require('../models/Reserva')
const format = require('date-format')
const router = express.Router()

// Pessoal da loopis que estiver vendo esse código, peço desculpas sei que esse código não está muito bom kkkk
// O que o desespero não faz quando o tempo fica perto de se encerrar kkk
router.post('/create', (req,res) => {
    
    // Formato em que a data precisa está dd/MM/yyyy hh:mm:ss
    let horarioInicio
    let horarioFim
    let codigoDoAmbiente
    let codigoDoProjetor


    try{
        horarioInicio = format.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")
        horarioFim = format.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioFim+":00.391")
        
    }catch(erro){
        return res.send(null)
    }

    codigoDoAmbiente = req.body.codigoDoAmbiente
    codigoDoProjetor = req.body.codigoDoProjetor
    
    
    Reserva.create({horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: codigoDoAmbiente, codigoDoProjetor: codigoDoProjetor, matriculaDoUsuario: req.body.matriculaDoUsuario}).then(reserva => {
        return res.send(reserva)
    }).catch(erro => {
        return res.send(null)
    })
})

router.post('/delete', (req,res) => {

    horarioInicio = format.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")

    Reserva.destroy({where: {horarioInicio: horarioInicio, codigoDoAmbiente: req.body.codigoDoAmbiente}}).then(()=>{
        return res.send(true)
    }).catch(erro => {
        return res.send(false)
    })
})

router.post('/search', (req,res) => {
    
    horarioInicio = format.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")

    Reserva.findOne({where: {horarioInicio: horarioInicio, codigoDoAmbiente: req.body.codigoDoAmbiente}}).then(reserva => {
        return res.send(reserva)
    }).catch(erro => {
        return res.send(erro)
    })
})

router.post('/update', (req,res) => {
    // Formato em que a data precisa está dd/MM/yyyy hh:mm:ss

    let horarioInicio
    let horarioFim
    let codigoDoAmbiente
    let codigoDoProjetor

    try{
        horarioInicio = format.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")
        horarioFim = format.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")
        
    }catch(erro){
        return res.send(null)
    }

   
    codigoDoAmbiente = req.body.codigoDoAmbiente
    codigoDoProjetor = req.body.codigoDoProjetor
    
    Reserva.update({horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: codigoDoAmbiente, codigoDoProjetor: codigoDoProjetor, matriculaDoUsuario: req.body.matriculaDoUsuario}, {where: {ID: req.body.ID}}).then(reserva => {
        return res.send(reserva)
    }).catch(erro => {
        return res.send(null)
    })
})

router.get('/read', (req,res) => {
    Reserva.findAll().then(reservas => {
        return res.send(reservas)
    }).catch(erro => {
        return res.send(null)
    })
})

module.exports = router