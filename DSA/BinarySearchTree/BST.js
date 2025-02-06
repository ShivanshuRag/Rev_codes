

/* 
    Binary search Tree ka implemention 

    Bst Node ke liye 
    * key (data)
    * left -> null
    * right -> null
    
   Binary search tree
   
   * root -> null


*/



  class BSTNode{

    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
  }

  class BinarySearchTree{
      constructor(){
        this.root = null
      }


      insertNode(key){
        let newNode = new BSTNode(key)
        if( this.root === null){
          this.root = newNode
        }else{
          this.insertMethod( this.root , newNode)
        }
      }

      insertMethod(node , newNode){
           if( newNode.key < node.key){
               if( node.left === null){
                  node.left = newNode

               }else{
                 this.insertMethod(node.left , newNode)
               }
           }else{
              if(node.right === null){
                node.right = newNode
              }else{
                this.insertMethod(node.right ,newNode)
              }
           }
      }
  }


  let BSTTREE = new BinarySearchTree()

   BSTTREE.insertNode(40)
   BSTTREE.insertNode(30)
   BSTTREE.insertNode(20)
   BSTTREE.insertNode(80)
   console.log(BSTTREE);