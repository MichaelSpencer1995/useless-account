const assert = require('assert')
const CreateAccount = require('../models/create_account')

describe('saving create account', () => {
    it('saved new account to database', done => {
        let account67 = new CreateAccount({
            username: 'Sunlsssazypitufo',
            password: 'spssssartan117',
            motto: 20
        })

        account67.save().then(() => {
            assert(account67.isNew === false)
            done()
        })
    })
})