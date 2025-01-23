
//  Queue is simply migdy line 

class Queue{
    constructor(){
       this.Queue = [] 
    }

    enqueue(value){ // add value
      this.Queue.unshift(value) // unshift method ek line me rakhta hai , FIFO principal
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
          val += this.Queue[index] + "\n"
            
        }
        return val
    }

    peek(){
      return this.Queue[0]
    }

}

 let myQueue = new Queue()

 myQueue.enqueue(10)
 myQueue.enqueue(30)
 myQueue.enqueue(40)
 myQueue.enqueue(80)
//  myQueue.dequeue()
 console.log(myQueue.printQ());
 console.log(myQueue.peek());
 