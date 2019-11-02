const express = require('express')
const Professor = require('../models/Professor')

const router = express.Router()

router.get('/', (req,res)=>{
    Professor.findAll().then(function (posts) {

        posts.map((post)=>{
            post.senha = ""
        })

        return res.send(posts)
    })
    
})

router.get('/add', (req,res)=>{
    Professor.create({nome: "Daniel"})
    res.send('cadastrado')
})

router.get('/auth', (req,res)=>{
    return res.send('Autenticando')
})


module.exports = router