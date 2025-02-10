

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


      delete(key){
        this.root = this.deleteNode(this.root, key)
      }
    
      deleteNode(node, key){ // node -> root
        if (node == null) {
          return null
        }
    
        if (key < node.key) {
          node.left = this.deleteNode(node.left, key)
        } else if (key > node.key) {
          node.right = this.deleteNode(node.right, key)
        } else {
          if (node.left === null && node.right === null) {
            return null;
          } else if(node.left === null){
            return node.right
          } else if(node.right === null){
            return node.left
          } else {
            let tempNode = this.findMinNode(node.right)
            node.key = tempNode.key
            node.right = this.deleteNode(node.right, tempNode.key)
          }
    
        }
        return node
      }
    
      findMinNode(node){
        while(node.left !== null){
          node = node.left
        }
        return node
      }

      // InOrder Traversal

      inOrderTraversal(){
        if( this.root == null) return;
        let result = []
        this.inOrder(this.root , result)
        return result;
      }

      inOrder(node , result){
        if( node !== null){

           this.inOrder(node.left , result )
           result.push(node.key)
           this.inOrder(node.right , result)
        }
      }

  }

  const bst = new BinarySearchTree();
  bst.insertNode(10);
  bst.insertNode(5);
  bst.insertNode(15);
  bst.insertNode(2);
  bst.insertNode(7);
  bst.insertNode(20);

  console.log(bst.root);

  // const bst = new BinarySearchTree();
  // bst.root = new BSTNode(10);
  // bst.root.left = new BSTNode(5);
  // bst.root.right = new BSTNode(15);
  // bst.root.left.left = new BSTNode(2);
  // bst.root.left.right = new BSTNode(7);
  // bst.root.right.right = new BSTNode(20);
  
 
 // console.log(bst.inOrderTraversal())  // [2, 5, 7, 10, 15, 20]
 