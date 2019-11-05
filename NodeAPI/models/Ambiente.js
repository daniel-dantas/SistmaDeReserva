const db = require('./db')

class Ambiente extends db.Model{}

Ambiente.init({
    codigo: {type: db.DataTypes.STRING, primaryKey: true, allowNull: false},
    capacidade: {type: db.DataTypes.INTEGER, allowNull: false},
    bloco: {type: db.DataTypes.STRING, allowNull: false},
    observacao: {type: db.DataTypes.TEXT}
}, { sequelize: db.sequelize, modelName: 'ambiente'})

// Ambiente.sync({force: true})

module.exports = Ambiente
