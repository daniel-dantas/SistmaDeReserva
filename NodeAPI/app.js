const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const Usuario = require('./models/Usuario')
const mail = require('./utils/envioEmail')
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
    res.send('API REST')
})

app.post('/checkToken', (req,res) => {
    try {
        var decoded = jwt.verify(req.body.token, 'sisresapi')
        return res.send(true)
      } catch(err) {
        return res.send(false)
      }
})


app.post('/user/recoveryPass', (req,res) => {

    let email = {
        titulo: "Recuperação de senha - Sistema de Reserva IFPB",
        texto: "",
        html: ""
    }

    Usuario.findOne({where: {matricula: req.body.matricula}}).then(user => {
        email.html = "<h1>Olá! Logo abaixo se encontra sua senha</h1><br/><p>Sua senha é: "+user.senha+" </p><p>Anote sua senha em alguma lugar para evitar esquecimento!</p>"
        mail(user.email, email.texto, email.titulo, email.html).then(()=>{
            return res.send(true)
        }).catch(err => {
            return res.send(false)
        })
    }).catch(erro => {
        return res.send(false)
    })

    
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