import mongoose, { Schema } from 'mongoose'

//Create schem nd model

const CreateAccountSchema = new Schema({
    username: String,
    password: String,
    motto: String
})

const CreateAccount = mongoose.model('CreateAccount', CreateAccountSchema)

export default CreateAccount
