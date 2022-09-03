const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')

router.get('/', (req, res) => {
    res.send("hello")
})

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({
            error: "Please fill out all the fields"
        })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if(savedUser){
                return res.status(422).json({
                    error: "User already exists with the email"
                })
            }
            bcrypt.hash(password , 12)
            .then(hashedPassword => {
                const user = new User({
                    email, password: hashedPassword, name
                })
    
                user.save()
                .then(user => {
                    res.json({
                        message: "Saved successfully"
                    })
                })
                .catch(err => {
                    console.log(err)
                })
            })
        })
        .catch(err => {
            console.log(err);
        })
})

module.exports = router