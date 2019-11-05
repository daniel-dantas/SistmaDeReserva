const express = require('express')
const Reserva = require('../models/Reserva')
const format = require('date-format')
const router = express.Router()



// Pessoal da loopis que estiver vendo esse código, peço desculpas sei que esse código não está muito bom kkkk
// O que o desespero quando o tempo fica perto de se encerrar não faz kkk
router.post('/create', (req,res) => {
    
    // Formato em que a data precisa está dd/MM/yyyy hh:mm:ss
    let horarioInicio
    let horarioFim
    let codigoDoAmbiente
    let codigoDoProjetor


    try{
        horarioInicio = format.parse("dd/MM/yyyy hh:mm:ss", req.body.horarioInicio)
        horarioFim = format.parse("dd/MM/yyyy hh:mm:ss", req.body.horarioInicio)
        
    }catch(erro){
        return res.send(null)
    }

    try{
        codigoDoAmbiente = req.body.codigoDoAmbiente
    }catch(erro){
        codigoDoAmbiente = null
    }

    try{
        codigoDoProjetor = req.body.codigoDoProjetor
    }catch(erro){
        console.log('Deu erro aqui')
        codigoDoProjetor = null
    }

    Reserva.create({horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: codigoDoAmbiente, codigoDoProjetor: codigoDoProjetor, matriculaDoUsuario: req.body.matriculaDoUsuario}).then(reserva => {
        return res.send(reserva)
    }).catch(erro => {
        return res.send(erro)
    })
})

router.post('/delete', (req,res) => {
    Reserva.destroy({where: {ID: req.body.ID}}).then(()=>{
        return res.send(true)
    }).catch(erro => {
        return res.send(false)
    })
})

router.post('/search', (req,res) => {
    Reserva.findOne({where: {ID: req.body.ID}}).then(reserva => {
        return res.send(reserva)
    }).catch(erro => {
        return res.send(null)
    })
})

router.post('/update', (req,res) => {
    // Formato em que a data precisa está dd/MM/yyyy hh:mm:ss
    let horarioInicio
    let horarioFim
    let codigoDoAmbiente
    let codigoDoProjetor


    try{
        horarioInicio = format.parse("dd/MM/yyyy hh:mm:ss", req.body.horarioInicio)
        horarioFim = format.parse("dd/MM/yyyy hh:mm:ss", req.body.horarioInicio)
        
    }catch(erro){
        return res.send(null)
    }

    try{
        codigoDoAmbiente = req.body.codigoDoAmbiente
    }catch(erro){
        codigoDoAmbiente = null
    }

    try{
        codigoDoProjetor = req.body.codigoDoProjetor
    }catch(erro){
        console.log('Deu erro aqui')
        codigoDoProjetor = null
    }

    Reserva.update({horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: codigoDoAmbiente, codigoDoProjetor: codigoDoProjetor, matriculaDoUsuario: req.body.matriculaDoUsuario}, {where: {ID: req.body.ID}}).then(reserva => {
        return res.send(reserva)
    }).catch(erro => {
        return res.send(erro)
    })
})

module.exports = router