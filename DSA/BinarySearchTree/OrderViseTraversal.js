
      
      class BSTNode{

        constructor(key){
            this.key = key
            this.left = null
            this.right = null
        }
      }
    
      class BinarySearchTree {
          constructor(){
            this.root = null
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

       

    //   preOrder
    preOrderTraversal(){
        if( this.root == null) return;
        let result = []
        this.preOrder(this.root , result)
        return result;
      }

      preOrder(node , result){
        if( node !== null){
            result.push(node.key)
           this.preOrder(node.left , result )
           
           this.preOrder(node.right , result)
        }
      }
      

         
    postOrderTraversal(){
        if( this.root == null) return;
        let result = []
        this.postOrder(this.root , result)
        return result;
      }

      postOrder(node , result){
        if( node !== null){
         
           this.postOrder(node.left , result )
           
           this.postOrder(node.right , result)
           result.push(node.key)
        }
      }

    }



      const bst = new BinarySearchTree();
      bst.root = new BSTNode(10);
      bst.root.left = new BSTNode(5);
      bst.root.right = new BSTNode(15);
      bst.root.left.left = new BSTNode(2);
      bst.root.left.right = new BSTNode(7);
      bst.root.right.right = new BSTNode(20);


      console.log(bst.postOrderTraversal()); // [ 2, 7, 5, 20, 15, 10 ] 