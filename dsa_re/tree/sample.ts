class TreeNode{
  val : number; 
  left : TreeNode | null;
  right : TreeNode | null;

  constructor(val: number){
    this.val = val 
    this.left = null 
    this.right = null
  }
}

class BST{
  root : TreeNode | null;
  
  constructor(){
    this.root = null 
  }

  insert(val: number){
    const newNode = new TreeNode(val)
    
    if(!this.root){
      this.root = newNode
      return 
    }
  }
  search(val: number){}
  getMin(){}
  getMax(){}
  remove(val: number){}
  preorder(){}
  postorder(){}
  bfs(){}
}
