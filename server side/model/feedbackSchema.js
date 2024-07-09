const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    comments:{
        type: String,
        required: true
    }
})

module.exports= mongoose.model('feedback', feedbackSchema)