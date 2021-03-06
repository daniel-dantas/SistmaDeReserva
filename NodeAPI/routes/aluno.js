const express = require('express')
const Aluno = require('../models/Aluno')
const Usuario = require('../models/Usuario')
const router = express.Router()
const mail = require('../utils/envioEmail')
const jwt = require('jsonwebtoken')


router.post('/create', async (req,res)=>{
    
    var matricula = req.body.matricula
    await Usuario.create({
        matricula: matricula,
        nome: req.body.nome,
        senha: req.body.senha,
        email: req.body.email
    }).then((user)=>{
        
        Aluno.create({matricula: matricula,curso: req.body.curso}).then((aluno)=>{
            let email = {
                titulo: "Seja Bem vindo! - Sistema de Reserva IFPB",
                texto: "",
                html: "<h1>Olá "+user.nome+"!</h1><br><p>Seja bem vindo ao sistema de Reservas do IFPB, nesse sistema você poderá realizar reservas de qualquer ambiente do IFPB sem precisar sair do conforto de onde você se encontra</p>"
            }
            var token = jwt.sign({user: user, curso: aluno.curso}, 'sisresapi')
            mail(user.email, email.texto, email.titulo, email.html)
            return res.send({token: token})
        }).catch(()=>{return res.send(false)})
    }).catch(()=>{
        return res.send(false)
    })

})

router.post('/search',(req,res)=>{
    Aluno.findOne({where: {matricula: req.body.matricula}, attributes: ['matricula','curso']}).then(aluno => {
        Usuario.findOne({where: {matricula: req.body.matricula}, attributes: ['nome', 'email']}).then(user => {
            return res.send({user: user, curso: aluno.curso})
       }).catch(()=>{return res.send(false)})
   }).catch(()=>{return res.send(false)})
})

router.post('/delete', async (req,res)=>{
    await Aluno.destroy({
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
        Aluno.update({curso: req.body.curso}, {where: {matricula: req.body.matricula}}).then((aluno)=>{
            return res.send(true)
        }).catch(()=>{return res.send(false)})
    }).catch(()=>{return res.send(false)})
})




router.post('/auth', (req,res)=>{

    if(req.body.matricula == "" && req.body.senha == ""){
        return res.send(false)
    }else{
        Aluno.findOne({where: {matricula: req.body.matricula}}).then(aluno => {
            Usuario.findOne({where: {matricula: req.body.matricula}, attributes: ['matricula', 'senha', 'nome', 'email']}).then(user=>{
                if(user.senha == req.body.senha){
                    var token = jwt.sign({user: user, curso: req.body.curso}, 'sisresapi');
                    return res.send({token: token})
                }else{
                    return res.send(false)
                }
            }).catch(()=>{res.send(false)})
        }).catch(()=>{res.send(false)})
    }
    
})

module.exports = router