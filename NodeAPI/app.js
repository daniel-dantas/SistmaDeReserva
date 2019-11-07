const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// Config
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(cors())
    
// Controladores
const rotaProfessor = require('./routes/professor')
const rotaAluno = require('./routes/aluno')
const rotaReserva = require('./routes/reserva')
const rotaProjetore = require('./routes/projetor')
const rotaAmbiente = require('./routes/ambiente')
const rotaAdmin = require('./routes/admin')

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