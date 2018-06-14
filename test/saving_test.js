const assert = require('assert')
const User = require('../models/user')

const SaveAccountToDb = (newUser) => {
    let user = new User({
        username: newUser.username,
        password: newUser.password,
        motto: newUser.motto,
        theme: newUser.theme
    })

    user.save().then(console.log('saved')).catch('something went wrong')
}

module.exports = SaveAccountToDb