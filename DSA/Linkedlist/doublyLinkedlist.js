
//  create node 

class Node {
  constructor( data , next = null , prev = null){
       this.data = data 
       this.next = next 
       this.prev = prev
  }

}

class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }


    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
}

doublyLinkedList.prototype.insertAtBegining = function( node){
  let newNode = new Node(node)
   
   newNode.next = this.head 
   newNode.tail = this.prev
   this.head = newNode
   
  
}

let newLinkedList = new doublyLinkedList()

newLinkedList.insertAtBegining(5)
newLinkedList.insertAtBegining(4)
newLinkedList.insertAtBegining(3)
newLinkedList.insertAtBegining(2)

newLinkedList.printList()