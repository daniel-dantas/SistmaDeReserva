const express = require('express')
const app = express()
const rotaProfessor = require('./routes/professor')
// Rotas

app.get('/', function (req, res) {
    res.send('API para um sistema de reserva')
})

app.use('professores', rotaProfessor)

app.listen(8000, function (params) {
    console.log('Servidor Rodando na porta 8000')
})