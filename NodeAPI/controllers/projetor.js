const express = require('express')
const projetor = require('../models/Projetor')

const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Aqui vai ficar os dados da api, com informação dos projetores')
})


module.exports = router