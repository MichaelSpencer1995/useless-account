const assert = require('assert')
const CreateAccount = require('../models/create_account')

describe('updating test records', () => {
    let account67

    beforeEach(done => {
        account67 = new CreateAccount({
            username: 'Sunlsssazypitufo',
            password: 'spssssartan117',
            motto: ''
        })
    
        account67.save().then(() => {
            done()
        })
    })

    it('updates one record from the database', done => {
        CreateAccount.findOneAndUpdate({ username: 'Sunlsssazypitufo' }, { username: 'UnlazyPitufo' }).then(() => {
            CreateAccount.findOne({ _id: account67.id }).then(result => {
                assert(result.username === 'UnlazyPitufo')
                done()
            })
        })
    })
})