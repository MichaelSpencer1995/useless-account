const mocha = require('mocha')
const assert = require('assert')
const CreateAccount = require('../models/create_account')

describe('saving create account', () => {
    it('saved new account to database', (done) => {
        let account = new CreateAccount({
            username: 'BigLazyPitufo',
            password: '123123',
            motto: 'Yolo'
        })

        account.save().then(() => {
            assert(account.isNew === false)
            done()
        })
    })
})