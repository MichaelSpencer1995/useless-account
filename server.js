const dotenv = require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing


app.use(require("body-parser").json())

app.use(express.static(path.resolve(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.post('/contact', (req, res) => {
    sendEmail(req.body, res)
    // the send email function returns whether or not the email was sent
})

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('connected to port', port)
})
