module.exports=
  function isEqual(source,target){
    //如果传入的不是对象,直接返回false
    if(!source || !target){
      return false}
    //如果对象类型不相同,直接返回false
    if(Object.prototype.toString.call(source)!==Object.prototype.toString.call(target)){
      return false}
    //如果两个对象的长度不等,直接返回false
    if(Object.keys(source).length!==Object.keys(target).length){
      return false}
    //定义一个用来存放递归后结果的数组
    const recursiveResult=[]
    const keys=Object.keys(source)
    for(let i=0;i<keys.length;i++) {
      if(!target[keys[i]]){
        return false}
      //如果值为对象类型则进行递归
      if (typeof source[keys[i]] === "object") {
        recursiveResult.push(isEqual(source[keys[i]], target[keys[i]]))
      }
      //如果值为基本类型则直接进行比较
      else {
        if (source[keys[i]] !== target[keys[i]]) {
          return false}}
    }
    //如果递归数组中没有false且循环中没有返回false则函数结果为true
    return !recursiveResult.includes(false)
  }

// function deepEqual(source, target) {
//   if (source === target) {
//     return true;
//   }
//   if (Array.isArray(source) && Array.isArray(target)) {
//     return source.every((item, index) => deepEqual(item, target[index]));
//   }
//   if (typeof source === "object" && typeof target === "object") {
//     const key1 = Object.keys(source);
//     const key2 = Object.keys(target);
//     if (key1.length !== key2.length) {
//       return false;
//     }
//     return key1.every((key) => deepEqual(source[key], target[key]));
//   }
//   return false;
// }