const dotenv = require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing


app.use(require("body-parser").json())

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'public', 'index.html'))
})

app.post('/login', (req, res) => {
    alert(req.body.name)
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('connected to port', port)
})
