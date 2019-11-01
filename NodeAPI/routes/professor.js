const express = require('express')
const Professor = require('../models/Professor')

const router = express.Router()

router.get('/', (req,res)=>{
    res.send('Aqui vai ficar os dados da api, com informação dos professores')
})


module.exports = router