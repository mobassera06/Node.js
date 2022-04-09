
const name = require('./utils.js')

const yargs = require('yargs')


//create add command
yargs.command({
    command: 'add',
    describe: 'add a command',
    handler() {
        console.log('adding a command')
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a  ote',
    handler() {
        console.log('remove a note')
    }
})
//list command
yargs.command({
    command: 'list',
    describe: 'list a  note',
    handler() {
        notes.listNotes()
    }
})
//read command
yargs.command({
    command: 'read',
    describe: 'read a  note',
    handler() {
        notes.listNotes()
    }
})
console.log(yargs.argv)
