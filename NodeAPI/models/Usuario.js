const db = require('./db')

class Usuario extends db.Model{}

Usuario.init({
    nome: {type: db.DataTypes.STRING, allowNull: false},
    email: {type: db.DataTypes.STRING, allowNull: false},
    senha: {type: db.DataTypes.STRING, allowNull: false},
    matricula: {type: db.DataTypes.STRING, primaryKey: true}
}, { sequelize: db.sequelize, modelName: 'usuario'})

// Usuario.sync({force: true})

module.exports = Usuario