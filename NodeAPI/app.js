const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Config
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(cors())
// Controladores
const rotaProfessor = require('./controllers/professor')
const rotaAluno = require('./controllers/aluno')
const rotaReserva = require('./controllers/reserva')
const rotaProjetore = require('./controllers/projetor')
const rotaAmbiente = require('./controllers/ambiente')
const rotaAdmin = require('./controllers/admin')

// Rotas
app.get('/', function (req, res) {
    res.send('Api REST')
})

app.use('/professores', rotaProfessor)
app.use('/alunos', rotaAluno)
app.use('/reservas', rotaReserva)
app.use('/projetores', rotaProjetore)
app.use('/ambientes', rotaAmbiente)
app.use('/admins', rotaAdmin)

app.listen(8000, function (params) {
    console.log('Servidor Rodando na porta 8000')
})