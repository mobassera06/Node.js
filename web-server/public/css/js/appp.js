//browser http request with fetch
console.log('client sids js')
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
console.log(data)
    })
})
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('', (e) => {
   e.preventDefault()
   




const location = search.value
console.log(location)
})


