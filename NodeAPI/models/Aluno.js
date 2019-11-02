const db = require('./db')

class Aluno extends db.Model{}

Aluno.init({
    nome: db.DataTypes.STRING,
    email: db.DataTypes.STRING,
    senha: db.DataTypes.STRING,
    matricula: db.DataTypes.STRING,
    curso: db.DataTypes.STRING
},{ sequelize: db.sequelize, modelName: 'aluno'})

// db.sequelize.sync({force: true})

module.exports = Aluno