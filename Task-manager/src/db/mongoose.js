
const mongoose = require('mongoose')


//connection with mongoose to connect with database
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
     
 })

