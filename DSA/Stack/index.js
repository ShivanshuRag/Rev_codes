
//  stack data structure is same as array , but its vertical 

class Stack{
 constructor(){
    this.Stack = []
 }

  push(data){
   this.Stack.push(data)
  }

  pop(){
    this.Stack.pop()
  }
  
  peek(){
   return this.Stack[this.Stack.length - 1]
  }

  FindValue(value){
    return this.Stack.includes(value)
  }

  PrintStack(){
    let str = ""
    for(let i = 0; i <= this.Stack.length; i++){
        str += this.Stack[i] + "\n"
    } 
    return str
  }

  clear(){
    this.Stack = []
  }

  reverse(){
   return this.Stack.reverse()
  }

  size(){
   return this.Stack.length
  }

  isEmpty(){
    return this.Stack.length === 0
  }
}

// usages of stack 

let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)


console.log(myStack.PrintStack());
myStack.reverse()
console.log(myStack.PrintStack());
 console.log(myStack.isEmpty());  
// console.log(myStack.clear());
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.FindValue(2))