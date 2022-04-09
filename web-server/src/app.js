const express = require('express')
const path = require('path')
const hbs = require('hbs')
const request = require('request')


console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

//define path for express config
const public = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(public))

app.get('', (req,res) => {
    res.render('index', {
        title: 'weather app',
        name: 'naaz'
    })
})




//set up server,first arg is root and second is funct
// app.get('', (req, res) => {
// res.send('<h1>hello express</h1>')
// })
app.get('/help', (req, res) => {
    res.render('help', {
        name: 'naaz',
        age: 22
   
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about me',
        name: 'mobassera'
    })
})
app.get('/weather', (req, res) => {
   res.send('weather is good')
})

//query strings provided at end of a url
app.post('/products', (req, res) => {
    console.log(req.query.search)
        res.send({
        products: []
    })
    })
//routes
app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: '404',
        errorMessage: 'help art not found'
    })
})



//wild card use for undefined routes
app.get('*', (req, res) => {
res.render('404', {
    title: '404',
    name: 'naaz',
    errorMessage: 'page not found'
})
})

//server run method
app.listen(3000, ()=> {
console.log('server is running on port 3000')
})