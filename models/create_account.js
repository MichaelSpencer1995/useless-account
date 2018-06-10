const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create schem nd model

const CreateAccountSchema = new Schema({
    username: String,
    password: String,
    motto: String
})

const CreateAccount = mongoose.model('CreateAccount', CreateAccountSchema)

module.exports = CreateAccount
