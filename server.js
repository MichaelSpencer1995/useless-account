const dotenv = require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${ process.env.MONGODBUSER }:${ process.env.MONGODBPASS }@cluster0-yhj1k.mongodb.net/test?retryWrites=true`)

mongoose.connection.once('open', () => {
    console.log('connection made!')
}).on('error', error => {
    console.log('Connection error: ', error)
})

app.use(require("body-parser").json())

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'public', 'index.html'))
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
        motto: req.body.motto
    }
    console.log(data)
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('connected to port', port)
})
