const db = require('./db')

class Projetor extends db.Model{}

Projetor.init({
    codigo: {type: db.DataTypes.STRING, primaryKey: true, allowNull: false},
    observacao: {type: db.DataTypes.TEXT, allowNull: false}
    
},{ sequelize: db.sequelize, modelName: 'projetor'})

// Projetor.sync({force: true})

module.exports = Projetor