const isEqual=require("../00_Util_Functions/isEqualObjectFunction")
const SingleLinkedList=require("./01_Singly_LinkedList")
/*
双向链表的特点
1. 包含head和tail属性，分别指向第一个节点，和最后一个节点
2. 每个节点由三部分组成，分别为prev/data/next
3. 第一个节点的prev和最后一个节点的next指向null
*/

module.exports=
  class DoublyLinkedList extends SingleLinkedList{
    constructor() {
      //继承单向链表中的head和length属性
      super()
      this.tail=null
      //在双向链表类的原型上定义节点类
      DoublyLinkedList.prototype.Node=function(element){
        this.data=element
        this.prev=null
        this.next=null
      }
    }
    //双向链表常用的方法

    /**1. 向列表尾部添加一个新的项
     * @param element {Object}
     * */
    append(element){
      const node=new this.Node(element)
      //当链表中没有任何元素
      if(this.length===0){
        this.head=node
        this.tail=node
      }else{
        //在尾部插入节点,可以根据tail的指针直接获取最后一个元素
        this.tail.next=node
        node.prev=this.tail
        this.tail=node
      }
      this.length++
    }
    /**2. 向列表的特性位置添加一个新的项
     * @param position {Number}
     * @param element {Object}
     * */
    insert(position,element){
      const node=new this.Node(element)
      //判断位置是否越界
      if(position<0||position>this.length){
        throw new Error("RANGE_EXCEEDED")
      }
      else{
        //如果在链表最前端插入节点
        if(position===0){
          //两种情况 1. 链表为空
          if(this.head===null){
            this.head=node
            this.tail=node
          }
          //2. 链表不为空
          else{
            this.head.prev=node
            node.next=this.head
            this.head=node
          }
          //如果在链表最后端插入节点
        }else if(position===this.length){
          node.prev=this.tail
          this.tail.next=node
          this.tail=node
        }else{
          let current=this.head
          let index=0
          while (index++<position){
            current=current.next
          }
          //修改四个指针
          node.prev=current.prev
          node.next=current
          current.prev.next=node
          current.prev=node
        }
        this.length++
      }
    }

    /*
    get、indexOf、update方法都无需重写,直接从父类继承即可

    3. get(position)  获取对应位置的元素
    4. indexOf(element)  返回元素在列表中的索引(没有就返回-1)
    5. update(position,element)  修改某个位置的元素
    (注意此处update方法继承自单链表中,单链表中由于借助removeAt和insert函数实现，
    双向链表继承该方法后this指向双链表实例,因此会调用重写的removeAt和inset函数)
    */


    //removeAt和remove方法需要重写
    /**6. 从列表的特定位置移除某一项
     * @param position {Number}
     * @return {Object}
     * */
    removeAt(position) {
      if(position<0||position>=this.length){
        throw new Error("RANGE_EXCEEDED")
      }
      else {
        let current=this.head
        if(position===0){
          //当只有一个元素的时候
          current=this.head
          if(this.length===1){
            this.head=null
            this.tail=null
          }else{
            this.head=this.head.next
            this.head.prev=null
          }
        }
        else if(position===this.length-1){
          current=this.tail
          this.tail=this.tail.prev
          this.tail.next=null
        }
        else{
          let index=0
          while(index++<position){
            current=current.next
          }
          current.prev.next=current.next
          current.next.prev=current.prev
        }
        this.length--
        return current
      }
    }

    /**7. 从列表中移除一项
     * @param element {Object}
     * @return {Number}
     * */
    remove(element){
      let current=this.head
      let index=0
      while(current){
        if(isEqual(current.data,element)){
          current.prev.next=current.next
          current.next.prev=current.prev
          this.length--
          return index
        }
        index++
        current=current.next
      }
      return -1;
    }


    /*isEmpty、size、toString都无需重写

    8. isEmpty()  列表是否为空
    9. size()  返回链表包含元素的个数
    10. toString()
    */

    //11. forwardString()  返回正向遍历节点字符串形式

    //12. backwardString()  返回反向遍历节点字符串形式
  }


