const express = require('express')
const Reserva = require('../models/Reserva')
const dateFormat = require('date-format')
const formatDate = require('format-date')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/read', (req,res)=>{
    Reserva.findAll().then((reservas)=>{
        
        return res.send(reservas)
    }).catch(erro =>{
        return res.send(null)
    })
})

router.post('/create', (req,res) => {
    

    // Formato em que a data precisa está dd/MM/yyyy hh:mm:ss
    let horarioInicio
    let horarioFim
    let codigoDoAmbiente
    let codigoDoProjetor

    try{
        horarioInicio = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")
        horarioFim = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioFim+":00.391")
    }catch(erro){
        return res.send(false)
    }

    codigoDoAmbiente = req.body.codigoDoAmbiente
    codigoDoProjetor = req.body.codigoDoProjetor
    
    var user = jwt.verify(req.body.token, 'sisres');
    const create = () =>{
        Reserva.create({horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: codigoDoAmbiente, codigoDoProjetor: codigoDoProjetor, matriculaDoUsuario: req.body.matriculaDoUsuario}).then(reserva => {
            horarioInicio = formatDate('{day}/{month}/{year} {hours}:{minutes}', reserva.horarioInicio)
            horarioFim = formatDate('{day}/{month}/{year} {hours}:{minutes}', reserva.horarioFim)
            
            let novaReserva = {horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: req.body.codigoDoAmbiente, matriculaDoUsuario: req.body.matriculaDoUsuario}
    
            return res.send(novaReserva)
        }).catch(erro => {
            return res.send(false)
        })
    }

    Reserva.findAll().then(reservas => {
        
        let status = true

        reservas.map(reserva => {
            if((horarioInicio >= reserva.horarioInicio && horarioInicio <= reserva.horarioFim) && req.body.codigoDoAmbiente == reserva.codigoDoAmbiente){
                status = false
                return res.send(false) 
            }else if((horarioFim >= reserva.horarioFim) && req.body.codigoDoAmbiente == reserva.codigoDoAmbiente){
                status = false
                return res.send(false)
            }else{
                status = false
                create()
            }
        })

        if (status){
            create()
        }else{
            return res.send(false)
        }
        
        
    })

    
})

router.post('/delete', (req,res) => {

    horarioInicio = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")

    Reserva.destroy({where: {horarioInicio: horarioInicio, codigoDoAmbiente: req.body.codigoDoAmbiente}}).then(()=>{
        return res.send(true)
    }).catch(erro => {
        return res.send(false)
    })
})


router.post('/search', (req,res) => {
    
    let horarioInicio = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+':00.391')
    
    Reserva.findOne({where: {horarioInicio: horarioInicio, codigoDoAmbiente: req.body.codigoDoAmbiente}}).then(reserva => {
        horarioInicio = formatDate('{day}/{month}/{year} {hours}:{minutes}', reserva.horarioInicio)
        let horarioFim = formatDate('{day}/{month}/{year} {hours}:{minutes}', reserva.horarioFim)

        return res.send({horarioInicio: horarioInicio, horarioFim: horarioFim,codigoDoAmbiente: reserva.codigoDoAmbiente, matriculaDoUsuario: reserva.matriculaDoUsuario})

    }).catch(erro => {
        return res.send(false)
    })
    


})

router.post('/update', (req,res) => {
    // Formato em que a data precisa está dd/MM/yyyy hh:mm:ss

    let horarioInicio
    let horarioFim
    let horarioInicioAntigo
    let codigoDoAmbiente
    let codigoDoProjetor

    try{
        horarioInicio = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")
        horarioFim = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicioAntigo+":00.391")
    }catch(erro){
        return res.send(false)
    }


    codigoDoAmbiente = req.body.codigoDoAmbiente
    codigoDoProjetor = req.body.codigoDoProjetor

    const update = ()=>{
        Reserva.update({horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: codigoDoAmbiente, codigoDoProjetor: codigoDoProjetor}, {where: {id: req.body.id}}).then(reserva => {
            return res.send(true)
        }).catch(erro => {
            return res.send(false)
        })
    }

    Reserva.findAll().then(reservas => {
        
        let status = true

        reservas.map(reserva => {
            if((horarioInicio >= reserva.horarioInicio && horarioInicio <= reserva.horarioFim) && req.body.codigoDoAmbiente == reserva.codigoDoAmbiente){
                status = false
                return res.send(false) 
            }else if((horarioFim >= reserva.horarioFim) && req.body.codigoDoAmbiente == reserva.codigoDoAmbiente){
                status = false
                return res.send(false)
            }else{
                status = false
                update()
            }
        })

        if (status){
            update()
        }else{
            return res.send(false)
        }
        
        
    })


    
})


module.exports = router