const Queue=require("./01_ArrayList_Queue")

/**
 * 利用队列解决---击鼓传花问题
 * @param {Array} nameList source array
 * @param {Number} ruleTime which order to eliminate 出局人的序号
 * @return {String} remained person
 * */
function passFlower(nameList,ruleTime){
  const queue=new Queue()
  //将所有人添加到队列中
  for(let i=0;i<nameList.length;i++){
    queue.enqueue(nameList[i])
  }
  //初始化变量需要设置在循环外部
  let result
  let index=0

  while(!queue.isEmpty()){
    result=queue.dequeue()
    index++

    //如果下标不等于要求的ruleTime,则将移除的元素重新加入队列末尾
    if(index!==ruleTime){
      queue.enqueue(result)

      //  如果下标等于ruleTime,则将index重置为0,不再将移除的元素重新加入队列
    }else{
      index=0
    }
  }
  return result
}


console.log(passFlower(["Lucy","Alice","Jerry","Leo","Kate","Rose"], 3))