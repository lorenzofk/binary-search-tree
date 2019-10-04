import Node from "../node";
import BinarySearchTree from "../binary-search-tree";

const assert = require('chai').assert;

describe('BinarySearchTreeTest Specs', () => {

    it('Should return a empty node in the first time', () => {
        let tree = new BinarySearchTree();
        assert.isNull(tree.root);
    });

    it('Should create and insert the new node in the tree\'s root', () => {
        let value = 1;
        let node = new Node(value);
        let tree = new BinarySearchTree();

        assert.isNull(node.left);
        assert.isNull(node.right);
        assert.deepStrictEqual(node.data, value);

        tree.root = node;

        assert.isNotNull(tree.root);
        assert.isObject(tree.root);
        assert.deepEqual(tree.root.data, node.data);
    });

});