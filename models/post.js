const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postScema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    body:{
      type: String,
      required: true  
    },
    photo:{
        type: String,
        default: "No Picture Posted"
    },
    postedBy: {
        type: ObjectId,
        ref:"User"
    }
})

mongoose.model("Post", postScema)