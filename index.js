const { request } = require('express')
const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')

require('./models/user')

mongoose.connect(MONGOURI)

mongoose.connection.on('connected', () => {
    console.log("mongodb connected")
})
mongoose.connection.on('error', (err) => {
    console.log(err);
})

app.listen(PORT, () => {
    console.log("server running in : " + PORT);
})