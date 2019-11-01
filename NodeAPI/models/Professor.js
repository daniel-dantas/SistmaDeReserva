const db = require('./db')

const professor = db.sequelize.define('professor', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    matricula:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    disciplinas:{
        type: db.Sequelize.STRING
    }

})

professor.sync({force: true})

module.exports = professor

