const db = require('./db')
const Ambiente = require('./Ambiente')
const Usuario = require('./Usuario')
const Projetor = require('./Projetor')


class Reserva extends db.Model{}

Reserva.init({
    ID: {type: db.DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    horarioInicio: {type: db.DataTypes.DATE, primaryKey: true, allowNull: false},
    horarioFim: {type: db.DataTypes.DATE, primaryKey: true, allowNull: true},
    codigoDoAmbiente: {
        type: db.DataTypes.STRING,
        allowNull: true,
        references: {
            model: Ambiente,
            key: 'codigo'
        }
    },
    codigoDoProjetor:{
        type: db.DataTypes.STRING,
        allowNull: true,
        references: {
            model: Projetor,
            key: 'codigo'
        }
    },
    matriculaDoUsuario:{
        type: db.DataTypes.STRING,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'matricula'
        }
    }
},{ sequelize: db.sequelize, modelName: 'reserva'})

// Reserva.sync({force: true})

module.exports = Reserva