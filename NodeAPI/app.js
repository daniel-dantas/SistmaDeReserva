const express = require('express')
const app = express()

// Rotas

app.get('/SistemaDeReserva/API/v1', function (req, res) {
    res.send('Api rest ainda vai ser trabalhada')
})


app.listen(8000, function (params) {
    console.log('Servidor Rodando na porta 8000')
})