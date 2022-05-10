const mongoose = require('mongoose')
const validator = require('validator')

//to take advantage of middleware,create the schema
const taskSchema = new mongoose.Schema({
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
        },
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

}, {
    timestamps: true
});
taskSchema.pre("save", async function (next) {
    const task = this;
    
    console.log('just before saving')
    next()
    })
 const Task = mongoose.model("Task", taskSchema);

module.exports = Task;