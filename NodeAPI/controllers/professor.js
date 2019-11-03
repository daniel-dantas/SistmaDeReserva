const express = require('express')
const Professor = require('../models/Professor')
const Usuario = require('../models/Usuario')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Professores')
})

router.post('/search',async (req,res)=>{
     await Usuario.findOne({where: {matricula: req.body.matricula}, attributes: ['matricula','nome', 'email']}).then(user => {
        Professor.findOne({where: {matricula: user.matricula}, attributes: ['disciplinas']}).then(prof => {
            return res.send({user: user, disciplinas: prof.disciplinas})
        })
    })
})

router.post('/create', async (req,res)=>{
    try{
        var matricula = req.body.matricula
        Usuario.create({
            matricula: matricula,
            nome: req.body.nome,
            senha: req.body.senha,
            email: req.body.email
        }).then((user)=>{
            Professor.create({matricula: matricula, disciplinas: req.body.disciplinas}).then((prof)=>{
                return res.send({user: user, disciplinas: prof.disciplinas})
            })
        }).catch((error)=>{
            return res.send('Nao deu certo: '+error)
        })
    }catch(err){
        res.send('erro')
    }
    
    
    
    
    
})

router.get('/auth', (req,res)=>{
    return res.send('Autenticando')
})


module.exports = router