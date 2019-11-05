const db = require('./db')
const Ambiente = require('./Ambiente')
const Usuario = require('./Usuario')
class Reserva extends db.Model{}

Reserva.init({
    ID: {type: db.DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    horarioInicio: {type: db.DataTypes.DATE, allowNull: false},
    horarioFim: {type: db.DataTypes.DATE, allowNull: true},
    codigoDoAmbiente: {
        type: db.DataTypes.STRING,
        references: {
            model: Ambiente,
            key: 'codigo'
        }
    },
    codigoDoUsuario:{
        type: db.DataTypes.STRING,
        references: {
            model: Usuario,
            key: 'matricula'
        }
    }
},{ sequelize: db.sequelize, modelName: 'reserva'})

// Reserva.sync({force: true})

module.exports = Reserva