
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
}


// insertAtBegning 

 /*
 
  -> create a node 
  -> point head to newNode   { assume  you are adding  data array 0 position }
  

 */

Linkedlist.prototype.inserAtBegning = function(data){
   let newNode = new Node(data)
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

     while( last.next == null ){
         last = last.next
     }
      
     last.next = newNode
     
 }