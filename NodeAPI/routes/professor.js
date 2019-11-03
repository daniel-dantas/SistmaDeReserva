const express = require('express')
const Professor = require('../models/Professor')
const Usuario = require('../models/Usuario')
const router = express.Router()

router.get('/', (req,res)=>{
    
})

router.get('/add', (req,res)=>{
    
    var matricula = "345354"
    Usuario.create({
        matricula: matricula,
        nome: "Daniel",
        senha: "123",
        email: "daniel.dantas.ip18@gmail.com"
    }).then(()=>{
        Professor.create({matricula: matricula, disciplinas: 'APS, POO'})
        res.send('cadastrado')
    }).catch((error)=>{
        res.send('Nao deu certo')
    })
    
    
    
    
})

router.get('/auth', (req,res)=>{
    return res.send('Autenticando')
})


module.exports = router