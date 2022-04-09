const { removeAllListeners } = require("nodemon")

const name = () => {
return 'your notes....'
}
const addNote = (title, body) => {
    const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title)
  
  debugger
  if (duplicateNotes.length === 0){
    notes.push({
        title: title,
        body: body
    })

   const listNotes = (title, body) => {
   const notes = loadNotes()
   notes.forEach((note) => {
       console.log(note.title)
   })
    }
    //es6 shorthand funct
  saveNotes(notes)
  console.log('new note added')

} else {
    console.log('note title taken')
}
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
fs.writeFileSync('utils.json', dataJSON)

}



const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('utils.json')
        const dataJSON = dataBuffer.toString()
  return JSON.parse(dataJSON)
    } catch (e){
return[]
    }
}
module.exports = {
    name: name,
    addNote: addNote,

}