const { request } = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const { MONGOURI } = require('./config/keys')
const cors = require('cors')

mongoose.connect(MONGOURI)

mongoose.connection.on('connected', () => {
    console.log("mongodb connected")
})
mongoose.connection.on('error', (err) => {
    console.log(err);
})

require('./models/user')
require('./models/post')
require('./models/fb-data')

app.use(express.json())
app.use(cors())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log("server running in : " + PORT);
})