const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

// const Client = sequelize.define('client', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
// })

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING(500)},
})

const UserMessage = sequelize.define('user_message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(Message)
Message.belongsTo(User)

Message.belongsToMany(User, {through: UserMessage})
User.belongsToMany(Message, {through: UserMessage})


module.exports = {
    User,
    Message,
    UserMessage
}