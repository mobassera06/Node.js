const { Console } = require('console')
const fs = require('fs')

const book = {
    title: 'hey',
    author: 'me'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title, data.author)

