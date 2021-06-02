module.exports=
  function deepClone(target){
    //根据传入的数据类型创建容器(调用Object原型链上的toString方法来区分传入的是数组还是对象)
    let result=Object.prototype.toString.call(target).includes("Array")?[]:{}
    Object.keys(target).forEach(item=>{
      if(typeof target[item]==="object"){
        result[item]=deepClone(target[item])
      }else{
        result[item]=target[item]
      }
    })
    return result
  }