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

router.get('/allUsers', (req, res) => {
    User.find()
    .then(users => {
        for(const user of users){
            user.password = undefined
        }
        res.json(users)
    })
})

router.post('/signin', (req, res) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(422).json({error: "Please provide username and password correctly"})
    }
    User.findOne({username: username})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error: "Invalid Email or password"})
        }
        bcrypt.compare(password, savedUser.password)
        .then(isMatched => {
            if(isMatched){
                savedUser.password = undefined
                const token = jwt.sign({_id: savedUser._id}, JWT_SECRET)
                res.json({token , user: savedUser})
            }else{
                res.status(422).json({error: "Invalid username or password"})
            }
        })
        .catch(err=> {
            console.log(err)
        })
    })

})

module.exports = router