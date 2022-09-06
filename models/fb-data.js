const mongoose = require("mongoose")

const fbUserScema = new mongoose.Schema({
    username: String,
    name: String,
    profile_picture: String
})

const fbDataSchema = new mongoose.Schema({
    user: fbUserScema,
    posts: [
        {
            user: fbUserScema,
            posted_on:  String,
            likes: Number,
            liked: Boolean,
            caption: String,
            shared: Number,
            comments: [
                {
                    text: String,
                    created_at: String,
                    user: fbUserScema
                }
            ]
        }
    ]
})

mongoose.model("FbData", fbDataSchema)