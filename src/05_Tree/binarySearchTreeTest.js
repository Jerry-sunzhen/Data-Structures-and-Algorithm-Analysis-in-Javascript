import BinarySearchTree from "./05_Tree/01_BinarySearch_Tree"

const binarySearchTree=new BinarySearchTree()

binarySearchTree.insert(18)
binarySearchTree.insert(35)
binarySearchTree.insert(76)
binarySearchTree.insert(9)
binarySearchTree.insert(15)
binarySearchTree.insert(28)
binarySearchTree.insert(16)
binarySearchTree.insert(44)
binarySearchTree.insert(88)
binarySearchTree.insert(3)
binarySearchTree.insert(12)
console.log(binarySearchTree)

//先序遍历
console.log(binarySearchTree.preOrderTraverse());

//中序遍历(按照升序进行排列)
console.log(binarySearchTree.inOrderTraverse());

//后序遍历
console.log(binarySearchTree.postOrderTraverse());

console.log(binarySearchTree.max())

console.log(binarySearchTree.min())


console.log(binarySearchTree.search(9))
console.log(binarySearchTree.search(20))
console.log(binarySearchTree.search(88))

binarySearchTree.remove(35)
console.log(binarySearchTree.preOrderTraverse())

