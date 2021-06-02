import DoublyLinkedList from  "./03_Linked_List/02_Doubly_LinkedList"

const doubleLinkedList=new DoublyLinkedList()

doubleLinkedList.append({id:1,username:"jerry"})
doubleLinkedList.append({id:2,username:"tom"})
doubleLinkedList.insert(1,{id:3,username:"frank"})
doubleLinkedList.append({id:4,username:"lucy"})
doubleLinkedList.insert(2,{id:5,username:"louis"})

// console.log(doubleLinkedList.indexOf({id:3,username:"frank"}))
// console.log(doubleLinkedList.tail)
// console.log(doubleLinkedList.head)
// console.log(doubleLinkedList.removeAt(0))
console.log(doubleLinkedList.remove({id:2,username:"tom"}))
// console.log(doubleLinkedList.update(2,{id:5,username:"armstrong"}))
console.log(doubleLinkedList)


