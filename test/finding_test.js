const assert = require('assert')
const CreateAccount = require('../models/create_account')

const checkIfAdded = (account) => {
    describe('finding records', () => {
        let account67
    
        beforeEach(done => {
            account67 = new CreateAccount({
                username: 'Sunlsssazypitufo',
                password: 'spssssartan117',
                motto: 5036
            })
        
            account67.save().then(() => {
                done()
            })
        })
    
        it('finds one record from the database', done => {
            CreateAccount.findOne({ username: 'Sunlsssazypitufo' }).then(result => {
                assert(result.username === 'Sunlsssazypitufo')
                console.log(result)
                done()
            })
        })
    
        it('finds one record by ID from the database', done => {
            CreateAccount.findOne({_id: account67._id }).then(result => {
                assert(result._id.toString() === account67._id.toString())
                console.log(result)
                done()
            })
        })
    })
}