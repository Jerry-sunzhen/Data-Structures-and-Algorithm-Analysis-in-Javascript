//使用数组实现队列结构
module.exports=
  class Queue{
    constructor() {
      this.items=[]
    }
    //1. enqueue 向队列尾部添加一个元素
    enqueue(element){
      this.items.push(element)
    }
    //2. dequeue 移除并返回队列的第一项
    dequeue(){
      return this.items.shift()
    }
    //3. front 返回队列中的第一个元素(不改变队列)
    front(){
      return this.items[0]
    }
    //4. isEmpty
    isEmpty(){
      return !this.items.length
    }
    //5. size
    size(){
      return this.items.length
    }
    //6. toString
    toString(){
      return this.items.join(" ")
    }
  }