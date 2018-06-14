const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create schem and model
const UserSchema = new Schema({
    username: String,
    password: String,
    motto: String,
    theme: String
})

const User = mongoose.model('user', UserSchema)

module.exports = User
