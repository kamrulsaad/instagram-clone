const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

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
        low_resolution: {
            url: String,
            width: Number,
            height: Number
        },
        thumbnail: {
            url: String,
            width: Number,
            height: Number
        },
        standard_resolution: {
            url: String,
            width: Number,
            height: Number
        }
    },
    users_in_photo: [],
    caption: {
        created_time: String,
        text: String,
        from: {
            username: String,
            profile_picture: String,
            id: String,
            full_name: String
        },
        id: String
    },
    user_has_liked: Boolean,
    id: String,
    user: {
        username: String,
        profile_picture: String,
        id: String,
        full_name: String
    }
})

mongoose.model("Post", postScema)