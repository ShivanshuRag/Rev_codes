
// node 

class Node{
    constructor(data , next=null){
      this.data = data
      this.next = next
    }
}

// empty Linkedlist 

class Linkedlist{
    constructor(){
        this.head = null
    }

    printList() {
        let current = this.head;
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      }

}


// insertAtBegning 

 /*
 
  -> create a node 
  -> point head to newNode   { assume  you are adding  data array 0 position }
  

 */

Linkedlist.prototype.inserAtBegning = function(data){
   let newNode = new Node(data)
   newNode.next = this.head; 
    this.head = newNode
}


//  insertAtLast 

/*

 -> create a node 
 -> check { head.next } is null 
 -> if head.next null nhi h to agle node pe switch ho jao 
 -> agar head.next null to node  ko add kar do 

*/

 Linkedlist.prototype.insertAtEnd = function(data){
     let newNode = new Node(data)

     if( !this.head ){  // agar khali node hai to 
        this.head = newNode
        return;
     }
     
     let last = this.head 

     while( last.next  ){
         last = last.next
     }
    
     last.next = newNode
     
    
 }


//  addAtGivenPosition 

/*
  -> user se prevnode lenge 
  -> create new node 
  -> new node ke next me, prevnode.next set kar denge
  -> prevnode.next = new node 

*/

// Linkedlist.prototype.insertAtGivenNode = function( prevNode , data){
//     if(!prevNode){
//         console.log(' prevNode is not exit');
//         return;
//     }

//     // const newNode = new Node(data , prevNode.next);
//     // prevNode.next = newNode



  //   Delete-first-Node 

  Linkedlist.prototype.delete_First_Node = function(){
      this.head = this.head.next
  }

   

  // Insert a node at a given position
    Linkedlist.prototype.insertAtPosition = function(data, position) {
    if (position < 0) {
      console.error("Invalid position");
      return;
    }


    const newNode = new Node(data);
    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < position && current) {
      previous = current;
      current = current.next;
      count++;
    }

    if (count === position) {
      previous.next = newNode;
      newNode.next = current;
    } else {
      console.error("Position out of bounds");
    }
  }
  
  // Deletelast node 

  Linkedlist.prototype.deleteLastNode = function(){

    if(!this.head.next ){
     
     return this.head = null;


    }
    let current = this.head
    let prev = null 

    while( current.next){
      prev = current 
      current = current.next
    }
     
     prev.next = null

    
      
  }

  // delate a node at given position 

  Linkedlist.prototype.DeleteAtPosition = function ( node){

    let forDelete = node 
    
    let prev = null
    let current = this.head

    if( current.data == forDelete){
      return this.head = null
    }

    while ( current.data !== forDelete){
        prev = current
        current = current.next
    }
     
    if( current.next == null){
      prev.next = null
    }

    prev.next = current.next


  }

    // search a node and traverse 

    Linkedlist.prototype.SearchNode = function (targetValue){

      if (this.head === null) {
        return "List is empty";
      }
    
      let current = this.head;
      let position = 0;
    
      while (current.data !== targetValue) {
        current = current.next;
        position++;
        if (current === null) {
          return `${targetValue} not found`;
        }
      }
    
      return `Found ${targetValue} at position ${position}`;
    };

    //  Reverse Linkedlist 

    Linkedlist.prototype.reverseLinkedList = function(){
       
      let prev = null 
      let curr = this.head
      let next = null

       while(curr.next !== null){
          next = curr.next
          curr.next = prev 
          prev = curr 
          curr = next 

       }
       this.head = prev 

    }

  // Example usage
let linkedList = new Linkedlist();
linkedList.inserAtBegning(10); // 10
linkedList.inserAtBegning(20); // 20 10 
linkedList.inserAtBegning(30);  // 30 20 10
linkedList.insertAtEnd(5) // 30 20 10 5
linkedList.insertAtEnd(2)
linkedList.insertAtPosition(23 , 1); //30 23 20 10 5

// linkedList.delete_First_Node()

// linkedList.deleteLastNode()
// linkedList.DeleteAtPosition(20)
// linkedList.SearchNode(20)
linkedList.reverseLinkedList()
linkedList.printList();