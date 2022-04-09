const  tasks = {
    tasks: [{
        text: 'grocery',
        compl: true
    },  {
        text: 'clean',
        compl: true
    }],

   getTask() {
      
   return   this.tasks.filter((task) => 
         task.compl === true
    )
   
       }

   }
console.log(tasks.getTask())
