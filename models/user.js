const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    full_name: {
        type: String,
        required: true
    },
    profile_picture: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

mongoose.model("User", userSchema)