const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
})

FeedbackSchema.set('timestamps', true)

module.exports = mongoose.model('Feedback', FeedbackSchema);