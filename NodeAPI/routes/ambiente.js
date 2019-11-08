const express = require('express')
const Ambiente = require('../models/Ambiente')

const router = express.Router()


router.post('/create', (req,res)=>{
    Ambiente.create(req.body).then(ambiente => {
        return res.send(ambiente)
    }).catch(erro => {
        return res.send(false)
    })
})

router.post('/search', (req,res) => {
    Ambiente.findOne({where: {codigo: req.body.codigo}}).then(ambiente => {
        return res.send(ambiente)
    }).catch(erro => {
        return res.send(false)
    })
})

router.post('/delete', (req,res) => {
    Ambiente.destroy({where: {codigo: req.body.codigo}}).then(() => {
       return res.send(true) 
    }).catch(erro => {
        return res.send(false)
    })
})

router.get('/read', (req, res) => {
    Ambiente.findAll().then(ambientes => {
        return res.send(ambientes)
    }).catch(erro => {
        return res.send(false)
    })
})

router.post('/update', (req,res) => {
    Ambiente.update({
        capacidade: req.body.capacidade, 
        bloco: req.body.bloco,
        observacao: req.body.observacao
    }, {where: {codigo: req.body.codigo}}).then(() => {
        return res.send(true)
    }).catch(erro => {
        return res.send(false)
    })
})

module.exports = router