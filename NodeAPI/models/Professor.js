const db = require('./db')

class Professor extends db.Model{}

Professor.init({
    nome: db.DataTypes.STRING,
    email: db.DataTypes.STRING,
    senha: db.DataTypes.STRING,
    matricula: db.DataTypes.STRING,
    disciplinas: db.DataTypes.TEXT
},{ sequelize: db.sequelize, modelName: 'professor'})

db.sequelize.sync({force: true})

