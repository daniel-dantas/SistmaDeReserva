const express = require('express')
const app = express()
const rotaProfessor = require('./routes/professor')
const rotaAluno = require('./routes/aluno')
// Rotas

app.get('/', function (req, res) {
    res.send('API para um sistema de reserva')
})

app.use('/professores', rotaProfessor)
app.use('/alunos', rotaAluno)


app.listen(8000, function (params) {
    console.log('Servidor Rodando na porta 8000')
})