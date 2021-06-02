const Stack=require("./01_ArrayList_Stack")

//使用栈结构解决之---封装十进制转换为二进制的函数
function decimalToBinary(decNumber){
  const stack=new Stack()
  let binStr=""
  while (decNumber>0){
    stack.push(decNumber%2)
    //使用Math.floor对结果向下取整
    decNumber=Math.floor(decNumber/2)
  }
  //当栈不为空一直循环
  while(!stack.isEmpty()){
    binStr+=stack.pop()
  }
  return binStr
}

console.log(decimalToBinary(100));