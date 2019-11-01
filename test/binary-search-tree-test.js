import BinarySearchTree from "../src/classes/binary-search-tree";

const assert = require('chai').assert;

describe('BinarySearchTreeTest Specs', () => {
    
    it('Should return a empty node in the first time', () => {
        let tree = new BinarySearchTree();
        assert.isNull(tree.root);
    });

    it('Should create and insert the new node in the tree\'s root', () => {
        let value = 1;
        let tree = new BinarySearchTree();

        tree.insert(null, value);

        assert.isNotNull(tree.root);
        assert.isObject(tree.root);
        assert.deepEqual(tree.root.data, value);
    });

    it('Should insert the nodes in the correct places', () => {
        let tree = new BinarySearchTree();
     
        tree.insert(null, 10);
        tree.insert(tree.root, 3);
        tree.insert(tree.root, 1);

        // Asserts in the root node
        assert.isNotNull(tree.root);
        assert.isNull(tree.root.right);
        assert.isNotNull(tree.root.left);

        assert.deepEqual(tree.root.data, 10);
        assert.deepEqual(tree.root.left.data, 3);
        assert.deepEqual(tree.root.left.left.data, 1);
        
        // Ensure that the third level is the last level
        assert.isNull(tree.root.left.left.left);

        tree.insert(tree.root, 4);
        assert.isNotNull(tree.root.left.right);

        tree.insert(tree.root, 12);
        assert.isNotNull(tree.root.right);
    });

    it('Should return a null node when doesn\'t found a node by value', () => {
        let tree = new BinarySearchTree();
        let found = null;

        tree.insert(null, 10);

        found = tree.search(tree.root, 3);
        
        assert.isNull(found);
        
    });

    it('Should find a node by value', () => {
        let tree = new BinarySearchTree();

        tree.insert(null, 3);

        let found = tree.search(tree.root, 3);
        
        assert.isNotNull(found);
        assert.equal(found.data, 3);
    });

    it('Should remove a leaf node', () => {
        let tree = new BinarySearchTree();

        tree.insert(null, 10);
        tree.insert(tree.root, 3);
        tree.insert(tree.root, 12);

        tree.remove(tree.root, 3);

        assert.isNull(tree.root.left);
        assert.isNotNull(tree.root.right);
    });

    it('Should remove a node with only a right child', () => {
        let tree = new BinarySearchTree();

        tree.insert(null, 10);
        tree.insert(tree.root, 3);
        tree.insert(tree.root, 4);
        tree.insert(tree.root, 12);

        tree.remove(tree.root, 3);

        assert.isNotNull(tree.root.left);
        assert.isNotNull(tree.root.right);
        assert.equal(tree.root.left.data, 4);
    });

    it('Should remove a node with only a left child', () => {
        let tree = new BinarySearchTree();

        tree.insert(null, 10);
        tree.insert(tree.root, 3);
        tree.insert(tree.root, 1);
        tree.insert(tree.root, 12);

        tree.remove(tree.root, 3);

        assert.isNotNull(tree.root.left);
        assert.isNotNull(tree.root.right);
        assert.equal(tree.root.left.data, 1);
    });

});