const express = require('express')
require('./db/mongoose')
const Task = require('./models/task')

const app = express()

const port = process.env.PORT || 3000
app.use(express.json())
//restapi route  for model db
app.post('/tasks', (req,res) => {
    const task = new Task(req.body)
    task.save().then(() => {
       res.send(task)
    }).catch((e) => {
res.status(400).send(e)
    })
    
})
//resource read
app.get("/tasks", (req, res) => {
    Task.find({}).then((tasks) => {
res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/tasks/:id', (req, res) => {
const _id =  req.params.id
Task.findById(_id).then(() => {
    if(!task) {
        return res.status(404).send()
    }
    res.send(task)
}).catch((e) => {
    res.status(500).send()
})
})


app.listen(port, () => {
    console.log('server is running on ' + port)
})