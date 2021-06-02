const ArrayList =require("./07_SortFunction/01_ArrayList")

const arr = new ArrayList()

let index = 0
while(index < 500000){
  arr.push(Math.floor(Math.random()*1000000))
  index++
}


// 直接调用实例上的排序算法

console.log("数据总量"+arr.list.length)
// console.log(`生成数据范围[${Math.min(...arr.list)},${Math.max(...arr.list)}]`)

// // 5. 快速排序
// let time5 = Date.now()
// let quick = arr.quickSort()
// console.log("快速排序耗时"+(Date.now()-time5))
// console.log(quick)


// 4. 希尔排序
// let time4 = Date.now()
// let shell = arr.shellSort()
// console.log("希尔排序耗时"+(Date.now()-time4))
// console.log(shell)


// 3. 插入排序
// let time3 = Date.now()
// let insert = arr.insertSort()
// console.log("插入排序耗时"+(Date.now()-time3))
// console.log(insert)


// 2. 选择排序    比较O(n^2)  交换O(n)
// let time2 = Date.now()
// let selection = arr.selectionSort()
// console.log("选择排序耗时"+(Date.now()-time2))
// console.log(selection)


// 1. 冒泡排序    比较O(n^2)  交换O(n^2)
// let time1 = Date.now()
// let bubble = arr.bubbleSort()
// console.log("冒泡排序耗时"+(Date.now()-time1))
// console.log(bubble)



