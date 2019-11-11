const express = require('express')
const Reserva = require('../models/Reserva')
const Ambiente  = require('../models/Ambiente')
const dateFormat = require('date-format')
const formatDate = require('format-date')
const router = express.Router()
const Moment = require('moment')
const momentRange = require('moment-range')
const moment = momentRange.extendMoment(Moment)
const cors = require('cors')
const jwt = require('jsonwebtoken')


cors()
router.post('/searchAvailable', (req,res) => {
    
    let ambientesLivres = []
    let horarioInicio = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+':00.391')
    let horarioFim = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioFim+':00.391')

    Ambiente.findAll().then(ambientes => {


        
            Reserva.findAll().then(reservas => {
                
                reservas.map(reser => {
                    let range = moment.range(reser.horarioInicio, reser.horarioFim)
                    
                    
                    return res.send(ambientes.filter((amb) => {return !((range.contains(horarioInicio) || range.contains(horarioFim)) && (reser.codigoDoAmbiente === amb.codigo))}))
                })

                
            })

            return res.send(ambientes)
        
    })

})


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
    
        
        let token

        try{
            token = jwt.verify(req.body.token, 'sisresapi');
            
        }catch(erro ){
            return res.send(false)
        }

        
        
        Reserva.findAll().then(reservas => {

            let status = true

            reservas.map(reser => {

                let range = moment.range(reser.horarioInicio, reser.horarioFim)

                status = !((range.contains(horarioInicio) || range.contains(horarioFim)) && (reser.codigoDoAmbiente === req.body.codigoDoAmbiente))

            })


            if(status){
                Reserva.create({horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: codigoDoAmbiente, codigoDoProjetor: codigoDoProjetor, matriculaDoUsuario: token.user.matricula}).then(reserva => {
                    horarioInicio = formatDate('{day}/{month}/{year} {hours}:{minutes}', reserva.horarioInicio)
                    horarioFim = formatDate('{day}/{month}/{year} {hours}:{minutes}', reserva.horarioFim)
                    
                    let novaReserva = {horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: req.body.codigoDoAmbiente, matriculaDoUsuario: reserva.matriculaDoUsuario}
                    
                    return res.send(novaReserva)
                    
        
                }).catch(erro => {
                    return res.send(false)
                })
            }else{
                return res.send(false)
            }

            
        })
    
})

router.post('/delete', (req,res) => {

    Reserva.destroy({where: {id: req.body.id}}).then(()=>{
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
    let codigoDoAmbiente
    let codigoDoProjetor

    try{
        horarioInicio = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioInicio+":00.391")
        horarioFim = dateFormat.parse("dd/MM/yyyy hh:mm:ss.SSS", req.body.horarioFim+":00.391")
    }catch(erro){
        return res.send(false)
    }



    try{
        jwt.verify(req.body.token, 'sisresapi')
    }catch(err){
        return res.send(false)
    }

    codigoDoAmbiente = req.body.codigoDoAmbiente
    codigoDoProjetor = req.body.codigoDoProjetor

    


    Reserva.findAll().then(reservas => {
        
        let status = true

        reservas.map(reser => {
            let range = moment.range(reser.horarioInicio, reser.horarioFim)


            status = !((range.contains(horarioInicio) || range.contains(horarioFim)) && (reser.codigoDoAmbiente === req.body.codigoDoAmbiente))

        })



        if (status){
            Reserva.update({horarioInicio: horarioInicio, horarioFim: horarioFim, codigoDoAmbiente: codigoDoAmbiente, codigoDoProjetor: codigoDoProjetor}, {where: {id: req.body.id}}).then(reserva => {
                return res.send(true)
            }).catch(erro => {
                return res.send(false)
            })        
        }else{
            return res.send(false)
        }
        
        
    })


    
})


module.exports = router