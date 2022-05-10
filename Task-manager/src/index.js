const app = require('./app')

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('server is running on ' + port)
})




// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     const task = await Task.findById('626187e9d990e0aa3215a4c0')
//    await task.populate('owner').exe() 
//     console.log(task.owner)
//    const task = await Task.findById('626187e9d990e0aa3215a4c0')
//     await task.populate('owner').execPopulate() 
// }
//     }) 
        // console.log(task.owner)
// const user =   User.findById('625f9e574224e7e589292ab8')

//  await user.populate('tasks').exec()
// console.log(user.tasks)
//     }


// main()

// const pet = {
// }
// pet.toJSON = function () {
//     return {}
// }
// console.log(JSON.stringify(pet))



//with middleware: new req -> run router handler
//using middleware we can customize server 
// app.use((req, res, next) => {
// console.log(req.method, req.path)
// if(req.method === 'GET') {
//     res.send('GET reqs are disabled')
// } else {
// next()
// }
// })
















//hashing algorithm - password with bycrypt
// const bycrypt = require('bcryptjs')

//authentication with token
// const jwt = require('jsonwebtoken')
// const myFunction = async () => {
//     const token = jwt.sign({_id: 'abc123' }, 'thisismynewcourse', { expiresIn: '1 day'})
//     console.log(token)
//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }
//bcyrpt:
// const password = 'Red12345'
// const hashedPassword = await bycrypt.hash(password, 5)
// console.log(password)
// console.log(hashedPassword)

// const isMatch = await bycrypt.compare('Red12345', hashedPassword)
// console.log(isMatch)

// myFunction()