const express = require('express')
const aluno = require('../models/Aluno')

const router = express.Router()

router.get('/', (req,res)=>{
    return res.send('Lista de alunos')
})

router.get('/add', (req,res)=>{
    return res.send('Adicionando')
})

router.get('/auth', (req,res)=>{
    return res.send('Autenticando')
})


module.exports = router