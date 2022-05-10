const promise = (callback) => {
setTimeout(() => {
    callback(undefined, [1, 2, 3])
}, 2000)
}
    promise((error, result) =>
     {
if(error) {
    return console.log(error)
}
console.log(result)
    })

//use of promises with promise keyword
    const dowork = new Promise(( resolve, reject) => {
    setTimeout(() => {
        resolve([3, 4, 1])//either one
        reject('thanks ')
    }, 2000)
    })
    dowork.then((result) => {
        console.log('success', result)
    }).catch((error) => {
        console.log('Error', error)
    })
