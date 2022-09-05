const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')

router.post('/signup', (req, res) => {
    const { username, full_name, profile_picture, password } = req.body
    if (!full_name || !profile_picture || !password || !username) {
        return res.status(422).json({
            error: "Please fill out all the fields"
        })
    }
    User.findOne({ username: username })
        .then((savedUser) => {
            if(savedUser){
                return res.status(422).json({
                    error: "The username is already being used"
                })
            }
            bcrypt.hash(password , 12)
            .then(hashedPassword => {
                const user = new User({
                    username, password: hashedPassword, full_name, profile_picture
                })
    
                user.save()
                .then(() => {
                    res.json({
                        message: "Successfully registered"
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

router.post('/signin', (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(422).json({error: "Please provide email and password correctly"})
    }
    User.findOne({email:email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error: "Invalid Email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(isMatched => {
            if(isMatched){
                const token = jwt.sign({_id: savedUser._id}, JWT_SECRET)
                res.json({token})
            }else{
                res.status(422).json({error: "Invalid Email or password"})
            }
        })
        .catch(err=> {
            console.log(err)
        })
    })

})

module.exports = router