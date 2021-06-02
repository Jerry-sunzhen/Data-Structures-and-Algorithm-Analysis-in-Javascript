const SinglyLinkedList=require("./01_Singly_LinkedList")

const linkedList=new SinglyLinkedList()
linkedList.append({
  id:1,
  name:"Jerry"
})
linkedList.append({
  id:2,
  name:"Tom"
})
linkedList.insert(0,{
  id:3,
  name:"Lucy"
})
linkedList.insert(1,{
  id:4,
  name:"Adam"
})
linkedList.insert(3,{
  id:5,
  name:"Leo"
})
linkedList.update(3,{id:10,name:"Lion"})
// console.log(linkedList.removeAt(3));
console.log(linkedList.toString());
console.log(JSON.stringify(linkedList.get(2)))
console.log(linkedList.indexOf({id:4,name:"Adam"}))
console.log(linkedList.remove({id:4,name:"Adam"}))
console.log(linkedList.isEmpty())
console.log(linkedList.size())
