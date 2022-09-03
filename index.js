const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

mongoose.connect(MONGOURI)

mongoose.connection.on('connected', () => {
    console.log("mongodb connected")
})
mongoose.connection.on('error', (err) => {
    console.log(err);
})

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

app.listen(PORT, () => {
    console.log("server running in : " + PORT);
})