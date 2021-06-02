export default
class BinarySearchTree{
  constructor() {
    this.root=null
    this._traverseList=[]
    BinarySearchTree.prototype.Node=function(key){
      this.key=key
      this.left=null
      this.right=null
    }
  }
  /**
  * 向树中插入一个新的键
   * @param key {Number}
  * */
  insert(key){
    const newNode=new this.Node(key)
    //如果根节点为null,则将新创建的节点直接添加到根节点位置
    if(this.root===null){
      this.root=newNode
    }
    this.insertNode(this.root,newNode)
  }
  //需要封装一个insertNode方法用来进行递归调用
  /**
   * insertNode
   *
   * */
  insertNode(rootNode,newNode){
    if(newNode.key>rootNode.key){
      if(rootNode.right===null){
        rootNode.right=newNode
      }else{
        this.insertNode(rootNode.right,newNode)
      }
    }else if(newNode.key<rootNode.key){
      if(rootNode.left===null){
        rootNode.left=newNode
      }else{
        this.insertNode(rootNode.left,newNode)
      }
    }
  }

  /**
   * 在树中查找一个键,如果存在返回true,不存在返回false
   * @param key {Number}
   * */
  search(key){
    return this.searchNode(this.root,key)
  }
  /**
   * 实现一个searchNode方法用来递归查找,考虑查找的最高性能
   * */
  searchNode(node,key){
    //当节点为空的时候表示未找到节点,直接返回false
    if(node===null) return false

    if(node.key===key){
      return true
    }
    else if(key>node.key){
      return this.searchNode(node.right,key)
    }
    else if(key<node.key){
      return this.searchNode(node.left,key)

    }
  }

  //  遍历所有节点分为:前序/中序/后序三种方式

  /**
   * 先序遍历所有节点
   * */
  preOrderTraverse(){
    this._traverseList=[]
    this.preOrderTraverseNode(this.root)
    return this._traverseList
  }
  /**
   * 封装一个先序递归遍历节点的方法
   * */
  preOrderTraverseNode(node){
    if(node===null) return

    this._traverseList.push(node.key)

    //先递归节点左侧子节点
    this.preOrderTraverseNode(node.left)

    //左侧子节点为null时停止递归左侧,开始递归右侧子节点
    this.preOrderTraverseNode(node.right)
  }

  /**
   * 中序遍历所有节点
   * */
  inOrderTraverse(){
    this._traverseList=[]
    this.inOrderTraverseNode(this.root)
    return this._traverseList
  }
  /**
   * 封装一个中序递归遍历节点的方法
   * */
  inOrderTraverseNode(node){
    if(node===null) return

    //先递归节点左侧子节点
    this.inOrderTraverseNode(node.left)

    this._traverseList.push(node.key)

    //左侧子节点为null时停止递归左侧,开始递归右侧子节点
    this.inOrderTraverseNode(node.right)
  }

  /**
   * 后序遍历所有节点
   * */
  postOrderTraverse(){
    this._traverseList=[]
    this.postOrderTraverseNode(this.root)
    return this._traverseList
  }
  /**
   * 封装一个后序递归遍历节点的方法
   * */
  postOrderTraverseNode(node){
    if(node===null) return

    //先递归节点左侧子节点
    this.postOrderTraverseNode(node.left)

    //左侧子节点为null时停止递归左侧,开始递归右侧子节点
    this.postOrderTraverseNode(node.right)

    this._traverseList.push(node.key)
  }



  min(){
    let node=this.root
    while (node.left!==null){
      node=node.left
    }
    return  node.key
  }

  max(){
    let node=this.root
    while (node.right!==null){
      node=node.right
    }
    return  node.key
  }

  /**
   * 删除树上某个节点
   *
   * */
   remove(key){

    //定义临时变量用来存储找到节点的信息
    let current=this.root
    let parentNode=null
    let isLeftChild=true

    //定义一个while循环用来寻找树结构中是否存在对应的key值
    //当key属性不等于当前节点的key值时一直循环
    while(key !== current.key){
      if(key<current.key){
        parentNode=current
        current=current.left
      }else{
        parentNode=current
        isLeftChild=false
        current=current.right
      }
      if(current===null){
        //当current值为空时说明寻找到叶节点还未找到匹配的值
        //则删除操作失败,直接结束函数并返回false
        return false
      }
    }
    //如果跳出循环并且函数未结束则说明寻找到了值

    //删除操作需要考虑三种情况
    /*
    * 1. 如果该节点是一个叶节点
    * 2. 如果该节点只有一个子节点
    * 3. 如果该节点有两个子节点(需要考虑子树的重排)
    * */

    // 注意: 所有的删除情况都需要首先考虑该节点是否为根节点


    //情况一: 如果该节点是一个叶节点
    if(current.left===null && current.right===null){

      //如果只有一个树节点
      if(current === this.root){
        this.root = null
      }
      else if(isLeftChild){
        parentNode.left=null
      }
      else{
        parentNode.right=null
      }
    }


    //情况二: 如果该节点含有一个子节点
    if(current.left !==null && current.right === null){
      //判断current是否为根节点
      if(current===this.root){
        this.root=current.left
      }
      else if(isLeftChild){
        parentNode.left=current.left
      }else{
        parentNode.right=current.right
      }
    }
    else if(current.left === null && current.right !== null){
      if(current===this.root){
        this.root=current.right
      }
      else if(isLeftChild){
        parentNode.right=current.left
      }else{
        parentNode.right=current.right
      }
    }

    //情况三: 含有两个子节点

    //需要current对象左子树的最大值(current的前驱 predecessor)/右子树的最小值(current的后继 successor)
    //以寻找后继(current右子树中的最大值)节点为例==>定义一个获取后继节点的实例方法
    if(current.left !== null && current.right !== null){
      let successor=this.getSuccessor(current)

      if(current===this.root){
       this.root=successor
      }else if(isLeftChild){
       parentNode.left=successor
      }else{
       parentNode.right=successor
      }
      successor.left=current.left
    }
  }

  //封装一个获取后继元素的函数(子树中的最小值)
  getSuccessor(delNode){
    let successorParent=delNode
    let successor=delNode.right

    while(successor.left !== null){
      successorParent=successor
      successor=successor.left
    }

    //如果后继节点不是删除元素的右子元素
    if(successor !== delNode.right){
      successorParent.left=successor.right
      successor.right=successorParent
    }
    return successor
  }
}