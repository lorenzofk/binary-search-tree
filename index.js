import BinarySearchTree from "./src/classes/binary-search-tree";

let tree = new BinarySearchTree();
     
tree.insert(null, 10);
tree.insert(tree.root, 3);
tree.insert(tree.root, 2);
tree.insert(tree.root, 1);

tree.remove(tree.root, 2);
tree.preOrder(tree.root);