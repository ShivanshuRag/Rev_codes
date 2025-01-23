
//  Queue is simply migdy line 

class Queue{
    constructor(){
       this.Queue = [] 
    }

    enqueue(value){ // add value
      this.Queue.unshift()
    }

    dequeue(){ // remove value 
        if(this.isEmpty()){
            return " Queue is empty"
        }
       this.Queue.shift() 
    }

    isEmpty(){
     return this.Queue.length === 0
    }

    clear(){
        this.Queue = []
    }

    findValue(value){
      return this.Queue.includes(value)
    }

    printQ(){
        let val = ""
        for (let index = 0; index < this.Queue.length; index++) {
          val += this.Queue[index]
            
        }
        return val
    }

    peek(){
      return this.Queue[0]
    }

}