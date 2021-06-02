//使用数组实现优先队列结构
module.exports=
  class PriorityQueue{
    constructor() {
      //使用数组定义一个用来存放元素的容器
      this.items=[]
      //定义一个生成包含内容及优先级的类(作为静态属性定义)
      PriorityQueue.prototype.QueueElement=function (element,priority){
        this.element=element
        this.priority=priority
      }
    }
    //1. enqueue 按照数字优先级插入内容
    enqueue(element,priority){
      const queueElement=new this.QueueElement(element,priority)
      let flag=false
      //便利items容器,如果新元素的优先级数小于后一个队列元素中的优先级数,则在此处插入该新元素
      for(let i=0 ;i<this.items.length;i++){
        if(queueElement.priority<this.items[i].priority){
          this.items.splice(i,0,queueElement)
          flag=true
          break
        }
      }
      //如果遍历完成后标识依然为false,则说明新加入的队列元素优先级最低,在最后插入该元素
      if(!flag){
        this.items.push(queueElement)
      }
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

// const priorityQueue=new PriorityQueue()
// priorityQueue.enqueue("Jerry",60)
// priorityQueue.enqueue("Mary",12)
// priorityQueue.enqueue("Lucy",40)
// priorityQueue.enqueue("Tom",8)
// console.log(priorityQueue);