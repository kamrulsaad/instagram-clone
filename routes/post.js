const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const FbPost = mongoose.model("FbData")

router.get('/insta_posts', (req, res) => {
    Post.find()
    .then(posts => {
        res.json({meta: {
            code: 200
        }, data: posts})
    })
    .catch(err => {
        console.log(err);
    })
})

router.get('/fb_posts', (req, res) => {
    FbPost.findOne()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
})

router.post('/createPost', (req, res) => {  
    const post = new Post(req.body)
    post.save().then(result => {
        res.json({post: result})
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router