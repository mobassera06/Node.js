// //root file of application
// console.log("start")
// //one arg as fnc and second as time
// setTimeout(() => {
// console.log('1 second timer')
// },1000)
// setTimeout(() => {
//     console.log('0 second timer')
//     },000)
    

// console.log("stop")



//making https request with a url
// const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=c6277cc5ac355500dfc8160c791c422b&query=37.8267,-122.4233'

// request({ url: url }, (error, response) => {
// if(error) {
//     console.log('unable to connect')
// }
// else {
//     console.log(response.body.daily.data[0].summary + ' it is currently ' + response.body.daily.data[0])
// }

// })
//shorthand obj property
const name = 'naaz'
const age = 22

const user = {
    name,
    age,
    location: 'ranchi'
}
console.log(user.name) 

//destructuring object
const object =  [{
    label: 'easy',
    price: '33 rs',
    saleprice: 'valid' 
},
{
    label: 'medium',
    price: ' 40 rs',
    saleprice: ('valid') 
    }
]
// const [{label,price,saleprice}] = object

// console.log(label)
// console.log()
const transaction = (type, { label, price } = {}) => {
    console.log(type, label, price)
}

transaction('order', object.filter(transaction))
