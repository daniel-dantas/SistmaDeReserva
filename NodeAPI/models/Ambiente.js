const db = require('./db')

class Ambiente extends db.Model{}

Ambiente.init({
    codigo: {type: db.DataTypes.INTEGER, primaryKey: true, allowNull: false},
    tipoDeAmbiente: {type: db.DataTypes.STRING, allowNull: false},
    capacidade: {type: db.DataTypes.INTEGER, allowNull: false},
    bloco: {type: db.DataTypes.STRING, allowNull: false}
}, { sequelize: db.sequelize, modelName: 'ambiente'})

// Ambiente.sync({force: true})

module.exports = Ambiente
