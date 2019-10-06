import BinarySearchTree from "../src/classes/binary-search-tree";

let tree = new BinarySearchTree();
     
tree.insert(null, 12);
tree.insert(tree.root, 4);
tree.insert(tree.root, 2);
tree.insert(tree.root, 8);
tree.insert(tree.root, 6);
tree.insert(tree.root, 16);

console.log("\nIn Order:");
tree.inOrder(tree.root);

console.log("\nPre Order:");
tree.preOrder(tree.root);

console.log("\nPost Order:");
tree.postOrder(tree.root);


let test = tree.search(tree.root, 3);
console.log(test);