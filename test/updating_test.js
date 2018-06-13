const assert = require('assert')
const CreateAccount = require('../models/create_account')

describe('updating test records', () => {
    let account67

    beforeEach(done => {
        account67 = new CreateAccount({
            username: 'Sunlsssazypitufo',
            password: '10001 Lachlan Dr, 78717 Austin, TX',
            motto: 10
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

    it('changes password on database', done => {
        CreateAccount.update({}, { $inc: { motto: 10 }}).then(() => {
            CreateAccount.findOne({ username: 'Sunlsssazypitufo' }).then(result => {
                assert(result.motto === 20)
                done()
            })
        })
    })
})