const event = {
    fruit: ' apple',
    characteristic: ['seed', 'leaf', 'branch'],
    color () {
        console.log('red is the colour of' + this.fruit)
    
        this.characteristic.forEach((charac) => {
        console.log(charac + ' is part of' + this.fruit)
    })
    
    }
}

event.color()

