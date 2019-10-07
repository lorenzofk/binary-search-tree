import Node from "../src/classes/node";

const assert = require('chai').assert;

describe('NodeTest Specs', () => {

    it('Should ensure that the node value is correct and its children are null', () => {
        let value = 1;
        let node = new Node(value);
        
        assert.isNull(node.left);
        assert.isNull(node.right);
        assert.deepStrictEqual(node.data, value);
    });

});