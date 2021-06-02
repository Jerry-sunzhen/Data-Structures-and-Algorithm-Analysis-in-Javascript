//基于数组实现栈结构
module.exports=
  class Stack{
    constructor() {
      this.items=[]
    }
    //需要实现的方法如下:
    //1. push压栈 将新元素添加到栈顶
    push(element){
      this.items.push(element)
    }
    //2. pop弹栈  移除栈顶元素
    pop(){
      return this.items.pop()
    }
    //3. peek(查找并返回栈顶的元素)
    peek(){
      return this.items[this.items.length-1]
    }
    //4. isEmpty 判断栈中是否有值
    isEmpty(){
      return !this.items.length
    }
    //5. size  返回栈中元素的个数(类似length)
    size(){
      return this.items.length
    }

    //6. toString 将栈内容以字符串形式返回
    toString(){
      return this.items.join(" ")
    }
  }