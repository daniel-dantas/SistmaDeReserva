const db = require('./db')
const Usuario = require('./Usuario')
class Aluno extends db.Model{}

Aluno.init({
    matricula: {
        type: db.Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'matricula'
        }
    },
    curso: {type: db.DataTypes.STRING, allowNull: false}
},{ sequelize: db.sequelize, modelName: 'aluno'})

// Aluno.sync({force: true})

module.exports = Aluno