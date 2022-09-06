const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    url: String,
    width: Number,
    height: Number
})

const userSchema = new mongoose.Schema({
    username: String,
    profile_picture: String,
    id: String,
    full_name: String
})

const postScema = new mongoose.Schema({
    attribution: String,
    likes_count: Number,
    comments: [{
        username: String,
        comment: String
    }],
    tags: [String],
    type: String,
    location: String,
    filter: String,
    created_time: String,
    link: String,
    images: {
        low_resolution: imageSchema,
        thumbnail: imageSchema,
        standard_resolution: imageSchema
    },
    users_in_photo: [],
    caption: {
        created_time: String,
        text: String,
        from: userSchema,
        id: String
    },
    user_has_liked: Boolean,
    id: String,
    user: userSchema
})

mongoose.model("Post", postScema)