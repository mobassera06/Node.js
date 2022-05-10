//Async await is set of tools to use with promises
//it will be used in route handle i.e api calls
//async functions always return a promise in output
//that promise is filled with value u choose to return from func
//then and catch are promise methods

require('../Task-manager/src/db/mongoose')
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0 ) {
                return reject('numbers must be not negative')
            }
            resolve(a+b)
            
        }, 2000)
    })
}
const work = async() => {
    const sum = await add(1, 80)
   const sum2 = await add(sum, -50)
//     throw new Error('something went wrong')
// return 'naaz'
return sum2
}

work().then((result) => {
    console.log('result', result)
}).catch((e) => {
    console.log(e)
})
