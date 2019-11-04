const db = require('./db')
const Usuario = require('./Usuario')

class Professor extends db.Model{}

Professor.init({
    
    matricula:{
        type: db.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'matricula'
        }
    },
    disciplinas: {type: db.DataTypes.TEXT, allowNull: false}
},{ sequelize: db.sequelize, modelName: 'professor'})

// Professor.sync({force: true})

module.exports = Professor