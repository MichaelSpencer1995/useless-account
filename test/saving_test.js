const assert = require('assert')
const CreateAccount = require('../models/create_account')

const SaveAccountToDb = (newUser) => {
    let user = new CreateAccount({
        username: newUser.username,
        password: newUser.password,
        motto: newUser.motto
    })

    user.save().then(console.log('saved')).catch('something went wrong')
}

module.exports = SaveAccountToDb