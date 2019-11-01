const Sequelize = require('sequelize')

const sequelize = new Sequelize('SistemaDeReserva', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgresql'
})


const db = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

module.exports = db

