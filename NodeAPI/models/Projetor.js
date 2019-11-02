const db = require('./db')

class Projetor extends db.Model{}

Projetor.init({
    codigo: db.DataTypes.STRING,
    observacao: db.DataTypes.TEXT
    
},{ sequelize: db.sequelize, modelName: 'projetor'})

db.sequelize.sync({force: true})

module.exports = Projetor