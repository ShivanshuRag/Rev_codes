
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

 doublyLinkedList.prototype.insertAtEnd = function(node){
     let newNode = new Node(node)
    
     if (!this.head) { // List is empty
      this.head = newNode;
      this.tail = newNode;
     }
      let current = this.head

     while (current.next !== null ){
        current = current.next
     }

      newNode.prev = current.tail 
      current.next  = newNode
      current.tail = newNode
      
       
   
  
 }

 doublyLinkedList.prototype.deleteFirstNode = function(){
    
    let current = this.head 

    if( current.next == null ){
        this.head = null 
        this.tail = null 
        return
    }

      this.head = current.next 
      current.prev = null

 }

 doublyLinkedList.prototype.addAnyPosition = function(postion , node){
     let newNode = new Node(node)

     let current = this.head 

     if ( !postion){
       console.log(`In this Linkedlist  , this ${postion} node is not exits`  );
       return
     }
        
     while ( postion && current.data !== postion  ){
          
        current = current.next


     }
     
     newNode.next = current.next
     newNode.prev = current
     current.next = newNode

 }

 
 doublyLinkedList.prototype.deleteAnyNode = function (value){
      if (!this.head) return null;

     let currentNode = this.head;

    while (currentNode) {
    if (currentNode.data === value) {
      // If the node to be deleted is the head
      if (currentNode === this.head) {
        this.head = currentNode.next;
        if (this.head) {
          this.head.prev = null;
        }
      }

      // If the node to be deleted is the tail
      if (currentNode === this.tail) {
        this.tail = currentNode.prev;
        if (this.tail) {
          this.tail.next = null;
        }
      }

      // If the node to be deleted is in the middle
      if (currentNode.prev) {
        currentNode.prev.next = currentNode.next;
      }
      if (currentNode.next) {
        currentNode.next.prev = currentNode.prev;
      }
      
      return currentNode;
    }
    currentNode = currentNode.next;
  }

   return null; // Value not found in the list
  }

  


let newLinkedList = new doublyLinkedList()

newLinkedList.insertAtBegining(5)
newLinkedList.insertAtBegining(4)
newLinkedList.insertAtBegining(3)
newLinkedList.insertAtBegining(2)
newLinkedList.insertAtEnd(6)
// newLinkedList.deleteFirstNode()
newLinkedList.addAnyPosition(4, 20)
newLinkedList.deleteAnyNode()


newLinkedList.printList()