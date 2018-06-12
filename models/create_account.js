const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create schem and model

const CreateAccountSchema = new Schema({
    username: String,
    password: String,
    motto: String
})

const CreateAccount = mongoose.model('createaccount', CreateAccountSchema)

module.exports = CreateAccount
