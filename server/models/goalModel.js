const mongoose = require('mongoose')

const Schema = mongoose.Schema

const goalSchema = new Schema({
    text: {
        type: String,
        required: [true, 'Please Adds Text Value']
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Goal', goalSchema)