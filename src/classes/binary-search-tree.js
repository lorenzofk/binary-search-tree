import Node from "./node";

class BinarySearchTree {

    constructor () {
        this._root = null;
    }

    get root () {
        return this._root;
    }

    set root (node) {
        this._root = node;
    }

    insert (node, value) {

        if (node === null) {
            this._root = new Node(value);
            return this._root;
        }

        if (node.data > value) {
            
            
            if (node.left === null) {
                node.left = new Node(value);
            } else {
                return this.insert(node.left, value);
            }

        } else {
            
            if (node.right === null) {
                node.right = new Node(value);
            } else {
                return this.insert(node.right, value);
            }

        }

    }

    preOrder (node) {

        if (node !== null) {
            this.visitNode(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    inOrder (node) {

        if (node !== null) {
            this.inOrder(node.left);
            this.visitNode(node.data);
            this.inOrder(node.right);
        }

    }

    postOrder (node) {

        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            this.visitNode(node.data);
        }

    }
    
    remove (current, value) {

        if (current.data > value) {
            current.left = this.remove(current.left, value);
        } else if (current.data < value) {
            current.right = this.remove(current.right, value);
        } else {

            if (current.left === null && current.right === null) {
                return null;
            } else if (current.left === null) {
                return current.right;
            } else if (current.right === null) {
                return current.left;
            } else {
                console.log('At this point we need to find the minimum value and reorganize the tree.');
            }

        }
        
        return current;
    }

    search (node, value) {

        if (node === null || node.data === value) {
            return node;
        }

        return (node.data > value)  
            ? this.search(node.left, value) 
            : this.search(node.right, value);
    }

    visitNode (value) {
        console.log(value);
    }
    
}

export default BinarySearchTree;