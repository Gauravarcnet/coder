class Node{
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(true){
            if(data < current.data){
                if(!current.left){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
}

const bst = new BST();
console.log("bst>>>", bst);
bst.insert(9);
bst.insert(4);
bst.insert(15);
bst.insert(6);
bst.insert(20);
bst.insert(1);
bst.insert(5);
bst.insert(12);
bst.insert(17);
console.log("BST tr>>", bst.root);