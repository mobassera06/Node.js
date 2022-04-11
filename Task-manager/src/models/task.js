const mongoose = require('mongoose')
const validator = require('validator')
const Task = mongoose.model('Task', {
    desc: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        //validation of model
        validate(value) {
            if (value !== true) {
                throw new Error('completed must be true')
            }
        }
    }
})

module.exports = Task