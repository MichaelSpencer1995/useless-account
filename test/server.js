const dotenv = require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const mongoose = require('mongoose')
const SaveAccountToDb = require('./saving_test')
const User = require('../models/user')
let users
//Es6 promises, don't know if this is nesesary
mongoose.Promise = global.Promise

// Connect to db before tests run
// mongoose.connect('mongodb://localhost/testaroo')
mongoose.connect(`mongodb+srv://${ process.env.MONGODBUSER }:${ process.env.MONGODBPASS }@cluster0-yhj1k.mongodb.net/test?retryWrites=true`)

mongoose.connection.once('open', () => {
    console.log('connection made!')
}).on('error', error => {
    console.log('Connection error: ', error)
})

app.use(require("body-parser").json())

app.use(express.static(path.resolve(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.post('/login', (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }
    console.log(data)
})

app.post('/create-account', (req, res) => {
    const data = {
        username: req.body.username,
        password: req.body.password,
        motto: req.body.motto,
        theme: req.body.theme
    }
    
    console.log(data)
    
    SaveAccountToDb(data)
    
    res.sendStatus(200)
})

app.post('/get-users-from-database', (req, res) => {
    //get full list of users from database
    User.find({})
    .then(result => {
        users = result
        res.send(users)
    })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('connected to port', port)
})
  