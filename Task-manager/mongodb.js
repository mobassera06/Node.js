//crud create read update delete

// const mongodb = require('mongodb')

// //initialize connection
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//shorthand of initializing connection as above
const { MongoClient, ObjectID } = require('mongodb')
//localhost ip:127.0.0.1
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'Task-manager'


//objectID:
// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp()) //prints time when id created
// console.log(id.id.length)
// console.log(id.toHexString().length)
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect')
    }
   
    const db = client.db(databaseName)
    // db.collection('tasks').findOne({ _id: new ObjectID('62500c62665f4c02c69b3f24') }, (error, task) => {
    //     if(error) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(task)
    // })

    db.collection('users').find({ age: 23 }).toArray((error, users) => {
        console.log(users)
    })
})


















     // //insert a document to db
//     db.collection('users').insertOne({
//         id: id,
//         name: 'Naaz',
//         age: 23
//     }, (error, result) => {
//      if (error) {
//          return console.log('unable to insert')

//      }
//      console.log(result.insertedId)
//      console.log(result)
//     })



// db.collection('tasks').insertMany([{
//   name: 'mobassera',
//   age: 22
// }, {
// name: 'mn',
// age: 22
// }
// ], (error, result) => {
//     if (error) {
//         return console.log('unable to insert')
//     }
//     console.log(result.ops)
//     console.log(result)
// })





