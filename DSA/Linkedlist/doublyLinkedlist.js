
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

doublyLinkedList.prototype.insertAtBegining = function( data){
  const newNode = new Node(data, this.head, null)

  if (this.head !== null) {
    this.head.prev = newNode
    
  }
  this.head = newNode
  if (this.tail === null) {
    this.tail = newNode
  }
   
  
}

 doublyLinkedList.prototype.insertAtEnd = function(data){
  const newNode = new Node(data, null, this.tail)

  if (this.tail !== null) {
    this.tail.next = newNode
    
  }

  this.tail = newNode

  if (this.head === null) {
    this.head = newNode
  }
      
       
   
  
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

        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
        
    

 }

 
 doublyLinkedList.prototype.deleteAnyNode = function (value){
      
    let current = this.head 
   
    if ( current.data == value){
      this.head = current.next 
      current.prev = null
      return
    }

    

     while ( current.data !== value){
       current = current.next
     }
      
      if( current.next == null ){
        this.tail = this.tail.prev
        this.tail.next = null

         return
      }

     current.prev.next = current.next;
     current.next.prev = current.prev;


     
  }

  doublyLinkedList.prototype.reverse = function (){

    let current = this.head;
    let temp = null;
  
    // Swap next and prev for all nodes of the list
    while (current !== null) {
      // Swapping
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      // Move to the next node (which is previous node before swapping)
      current = current.prev;
    }
  
    // Before changing the head, check for the cases like empty list and list with only one node
    if (temp != null) {
      this.tail = this.head 
      this.head = temp.prev
    }

}


let newLinkedList = new doublyLinkedList()

newLinkedList.insertAtBegining(5)
newLinkedList.insertAtBegining(4)
newLinkedList.insertAtBegining(3)
newLinkedList.insertAtBegining(2)
newLinkedList.insertAtEnd(6)
// newLinkedList.deleteFirstNode()
newLinkedList.addAnyPosition(4, 20)
// newLinkedList.deleteAnyNode(2)


 newLinkedList.reverse()
newLinkedList.printList()

 