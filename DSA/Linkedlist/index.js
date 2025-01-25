
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

     if(!(this.head == null) ){  // agar head null h 
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

Linkedlist.prototype.insert_At_Given_Node = function ( prevNode , data){
    if(!prevNode){
        console.log(' prevNode is not exit');
        return;
    }

    const newNode = new Node(data , prevNode.next);
    prevNode.next = newNode
}


  //   Delete-first-Node 

  Linkedlist.prototype.delete_First_Node = function(){
      this.head = this.head.next
  }


  

  // Example usage
let linkedList = new Linkedlist();
linkedList.inserAtBegning(10);
linkedList.inserAtBegning(20);
linkedList.inserAtBegning(30);


linkedList.printList();