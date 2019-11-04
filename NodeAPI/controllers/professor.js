const express = require('express')
const Professor = require('../models/Professor')
const Usuario = require('../models/Usuario')
const router = express.Router()



router.post('/search',async (req,res)=>{
     await Professor.findOne({where: {matricula: req.body.matricula}, attributes: ['matricula','disciplinas']}).then(prof => {
        Usuario.findOne({where: {matricula: req.body.matricula}, attributes: ['nome', 'email']}).then(user => {
            return res.send({user: user, disciplinas: prof.disciplinas})
        }).catch(()=>{return res.send(null)})
    }).catch(()=>{return res.send(null)})
})

router.post('/create', async (req,res)=>{
    
        var matricula = req.body.matricula
        await Usuario.create({
            matricula: matricula,
            nome: req.body.nome,
            senha: req.body.senha,
            email: req.body.email
        }).then((user)=>{
            Professor.create({matricula: matricula, disciplinas: req.body.disciplinas}).then((prof)=>{
                user.senha = ""
                return res.send({user: user, disciplinas: prof.disciplinas})
            })
        }).catch((error)=>{
            return res.send('Nao deu certo: '+error)
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
        }).catch(()=>{return res.send(null)})
    }).catch(()=>{return res.send(null)})
})

router.post('/auth', (req,res)=>{
    Professor.findOne({where: {matricula: req.body.matricula}}).then(professor => {
        Usuario.findOne({where: {matricula: req.body.matricula}, attributes: ['matricula', 'senha', 'nome', 'email']}).then(user=>{
            if(user.senha == req.body.senha){
                user.senha = ""
                return res.send({user: user, disciplinas: professor.disciplinas})
            }else{
                return res.send(null)
            }
        }).catch(()=>{res.send(null)})
    }).catch(()=>{res.send(null)})
})

module.exports = router