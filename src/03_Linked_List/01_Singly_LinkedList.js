const isEqual=require("../00_Util_Functions/isEqualObjectFunction")

module.exports=
  class SinglyLinkedList{
    //在链表中需要定义一个head保存了指向第一个元素的指针
    constructor() {
      this.head=null
      this.length=0
      //链表中的元素,保存了每个元素对应的元素和下一个元素的指针
      SinglyLinkedList.prototype.Node=function(element){
        this.data=element
        this.next=null
      }
    }
    // 1. append(element)   向队列尾部添加新项目
    append(element){
      const Node=new this.Node(element)
      //如果链表中没有数据,则将head的指针直接指向新创建的Node
      if(this.length===0){
        this.head=Node
      }else{
        //初始化指针位置为head
        let current=this.head
        while(current.next!==null){
          current=current.next
        }
        current.next=Node
      }
      this.length++
    }
    // 2. insert(position,element)   向队列指定位置添加新项目
    insert(position,element){
      //如果插入的位置越界,抛出异常
      if(position<0||position>this.length){
        throw new Error("RANGE_EXCEEDED")
      }
      const Node=new this.Node(element)
      //如果在下标为0(第一个)的位置,需要对this.head进行赋值操作
      if(position===0){
        Node.next=this.head
        this.head=Node
      }else{
        //在下标为非0的位置,需要设置一个index值与current保存的元素位置进行同步
        let index=0
        let current=this.head
        while(index++<position-1){
          current=current.next
        }
        Node.next=current.next
        current.next=Node
      }
      this.length++
    }
    // 3. get(position)    获取指定位置元素
    get(position){
      //进行越界判断如果position<0||position>=length
      if(position<0||position>=this.length){
        throw new Error("RANGE_EXCEEDED")
      }else{
        let current=this.head
        let index=0
        while(index++<position){
          current=current.next
        }
        return current
      }
    }
    // 4. indexOf(element) 返回元素所在位置索引值,不存在返回-1
    //element是一个对象
    indexOf(element){
      let current=this.head
      let index=0

      while (current){
        if(isEqual(current.data,element)){
          return index
        }
        index++
        current=current.next
      }
      return -1
    }
    // 5. update(position,element) 修改某个位置的元素
    update(position,element){
      // if(position<0||position>=this.length){
      //   throw new Error("RANGE_EXCEEDED")
      // }else{
      //   let current=this.head
      //   let index=0
      //   while(index++<position){
      //     current=current.next
      //   }
      //   current.data=element
      // }

      //借助removeAt方法和insert方法实现update方法
      const result=this.removeAt(position)
      this.insert(position,element)
      return result
    }
    // 6. removeAt(position) 移除特性位置的元素
    removeAt(position){
      if(position<0||position>=this.length){
        throw new Error("RANGE_EXCEEDED")
      }else{
        let remove
        if(position===0){
          remove=this.head
          this.head=this.head.next
        }else{
          let index=0
          let current=this.head
          while(index++<position-1){
            current=current.next
          }
          remove=current.next
          current.next=current.next.next
        }
        //长度自减
        this.length--
        return remove
      }
    }
    // 7. remove(element)  移除一个某元素
    remove(element){
      let current=this.head
      let index=0
      while(current){
        if(isEqual(current.data,element)){
          //remove方法已经让长度减少,无需再减少
          return this.removeAt(index)
        }
        index++
        current=current.next
      }
      return -1

    }
    // 8. isEmpty
    isEmpty(){
      return !this.length
    }
    // 9. size
    size(){
      return this.length
    }
    // 10. toString
    toString(){
      let current=this.head
      let str=""
      while(current){
        str+=JSON.stringify(current.data)
        current=current.next
      }
      return str
    }
  }

