//connection with mongoose ti connect with database

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
  
 })

//  const user = mongoose.model('User', {
//      name: {
//          type: String,
 //          required: true
//      },
//      age: 
//          {
//              type: Number

//          }
     
//  })
//  const me = new user({
//      name: 'Naaz',
//      age: 22
//  })

//  me.save().then((me) => {
// console.log(me)
//  }).catch(() => {
// console.log('error', error)
//  })


 //create a mongoose model

//  const task = new Task({
//      desc: 'learn mongoose',
//      completed: true
//  })
//  task.save().then((task) => {
// console.log(task)
//  }).catch((error) => {
//      console.log(error)
//  })