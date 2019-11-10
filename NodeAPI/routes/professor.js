const express = require('express')
const Professor = require('../models/Professor')
const Usuario = require('../models/Usuario')
const router = express.Router()
const jwt = require('jsonwebtoken')
const mail = require('../utils/envioEmail')
router.post('/search',async (req,res)=>{
     await Professor.findOne({where: {matricula: req.body.matricula}, attributes: ['matricula','disciplinas']}).then(prof => {
        Usuario.findOne({where: {matricula: req.body.matricula}, attributes: ['nome', 'email']}).then(user => {
            return res.send({user: user, disciplinas: prof.disciplinas})
        }).catch(()=>{return res.send(false)})
    }).catch(()=>{return res.send(false)})
})

router.post('/create', async (req,res)=>{
    
        var matricula = req.body.matricula
        await Usuario.create({
            matricula: matricula,
            nome: req.body.nome,
            senha: req.body.senha,
            email: req.body.email
        }).then((user)=>{
            Professor.create({matricula: user.matricula, disciplinas: req.body.disciplinas}).then((prof)=>{
                let email = {
                    titulo: "Seja Bem vindo! - Sistema de Reserva IFPB",
                    texto: "",
                    html: "<h1>Olá "+user.nome+"!</h1><br><p>Seja bem vindo ao sistema de Reservas do IFPB, nesse sistema você poderá realizar reservas de qualquer ambiente do IFPB sem precisar sair do conforto de onde você se encontra</p>"
                }
                mail(user.email, email.texto, email.titulo, email.html)
                let token = jwt.sign({user: user, disciplinas: prof.disciplinas}, 'sisresapi')
                return res.send({token: token})
            })
        }).catch((error)=>{
            return res.send(false)
        })
    
    
    
})

router.post('/delete', async (req,res)=>{

    await Professor.destroy({
        where: {matricula: req.body.matricula}
    }).then(()=>{
        Usuario.destroy({
            where: {matricula: req.body.matricula}
        }).then(()=>{
            return res.send(true)
        })
    }).catch((error)=>{
        return res.send(false)
    })
})

router.post('/update', (req,res)=>{
    Usuario.update({nome: req.body.nome, senha: req.body.senha, email: req.body.email}, {where: {matricula: req.body.matricula}}).then((user)=>{
        Professor.update({disciplinas: req.body.disciplinas}, {where: {matricula: req.body.matricula}}).then((prof)=>{
            return res.send(user)
        }).catch(()=>{return res.send(false)})
    }).catch(()=>{return res.send(false)})
})

router.post('/auth', (req,res)=>{
    Professor.findOne({where: {matricula: req.body.matricula}}).then(professor => {
        Usuario.findOne({where: {matricula: req.body.matricula}, attributes: ['matricula', 'senha', 'nome', 'email']}).then(user=>{
            if(user.senha == req.body.senha){
                let token = jwt.sign({user: user, disciplinas: professor.disciplinas}, 'sisresapi')
                return res.send({token: token})
            }else{
                return res.send(false)
            }
        }).catch(()=>{res.send(false)})
    }).catch(()=>{res.send(false)})
})

module.exports = router