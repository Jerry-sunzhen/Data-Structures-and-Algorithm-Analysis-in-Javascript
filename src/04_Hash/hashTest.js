import HashTable from "./04_Hash/01_Hash";

const hashTable=new HashTable()

hashTable.put("Jerry","25")
hashTable.put("Tom","12")
hashTable.put("Mark","32")
hashTable.put("Kate","19")
hashTable.put("Lucy","22")
hashTable.put("Richard","33")

// console.log(hashTable.get("Gatsby"));
// console.log(hashTable.get("Mark"));
// console.log(hashTable.get("Lucy"));

// console.log(hashTable.remove("Mark"))
// console.log(hashTable.remove("Gatsby"))
hashTable.remove("Kate")
hashTable.remove("Lucy")
hashTable.remove("Richard")
hashTable.remove("Mark")
hashTable.remove("Tom","12")
console.log(hashTable)