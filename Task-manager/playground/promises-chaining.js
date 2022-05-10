require('../src/db/mongoose')

const User = require('../src/models/user')

//if the argument is an object then use {} to define key value property
// Task.findByIdAndUpdate(('62527b4612f298105ce2f352'), { age: 22 }).then((task) => {
//      console.log(task)
//      return Task.countDocuments({ age: 22})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {

// })
//promises are used with callback func

//promises:a proxy for a value that will eventually become available. Promises are
// one way to deal with asynchronous code, without getting stuck in callback hell.


//async-await
const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age})
    return count
}
updateAgeAndCount('62527b4612f298105ce2f352', 18 ).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
const deleteTaskAndCount = async (id) => {
    const user = await User.findByIdAndDelete(id)
    const count = await User.countDocuments({ age: 15 })
    return count
}
deleteTaskAndCount('625e878cdfd6be87a62ed399').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})