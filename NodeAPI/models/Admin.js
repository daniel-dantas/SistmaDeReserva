const db = require('./db')

class Admin extends db.Model{}

Admin.init({
    userName: {type: db.DataTypes.STRING, primaryKey: true, allowNull: false},
    senha: {type: db.DataTypes.STRING, allowNull: false},
}, { sequelize: db.sequelize, modelName: 'admin'})

// Admin.sync({force: true})

module.exports = Admin
