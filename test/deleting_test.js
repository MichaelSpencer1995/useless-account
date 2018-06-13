const assert = require('assert')
const CreateAccount = require('../models/create_account')

describe('deleting records', () => {
    let account67

    beforeEach(done => {
        account67 = new CreateAccount({
            username: 'Sunlsssazypitufo',
            password: 'spssssartan117',
            motto: 5323
        })
    
        account67.save().then(() => {
            done()
        })
    })

    it('deletes one record from the database', done => {
        CreateAccount.findOneAndRemove({ username: 'Sunlsssazypitufo' }).then(() => {
            CreateAccount.findOne({ username: 'Sunlsssazypitufo' }).then(result => {
                assert(result === null)
                done()
            })
        })
    })
})