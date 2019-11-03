const express = require('express')
const aluno = require('../models/Admin')

const router = express.Router()

router.get('/', (req,res)=>{
    return res.send('Lista de admins')
})

module.exports = router