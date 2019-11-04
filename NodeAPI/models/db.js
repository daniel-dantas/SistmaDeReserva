const  { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('SistemaDeReserva', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgresql'
})


const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Model: Model,
    DataTypes: DataTypes
}

db.sequelize.sync()

module.exports = db

