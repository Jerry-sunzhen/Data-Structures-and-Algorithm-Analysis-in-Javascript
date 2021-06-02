// 封装一个ArrayList类并且将排序算法作为该类的实例方法
module.exports =
  class ArrayList {

    constructor() {
      this.list = []
    }

    push(element) {
      this.list.push(element)
    }

    toString() {
      return this.list.join(" ")
    }


    /**封装一个交换数据位置的函数
     * @param  m {number}
     * @param  n {number}
     * */
    swapItem(m, n) {
      let temp = this.list[m]
      this.list[m] = this.list[n]
      this.list[n] = temp
    }

    // 冒泡排序(默认为升序排列)
    bubbleSort(isDescend = false) {
      for (let i = 0; i < this.list.length - 1; i++) {
        let temp
        for (let j = 0; j <= this.list.length - i - 1; j++) {
          if (!isDescend && this.list[j] > this.list[j + 1] || isDescend && this.list[j] < this.list[j + 1]) {
            this.swapItem(j, j + 1)
          }
        }
      }
      return this.toString()
    }

    // 选择排序
    selectionSort(isDescend = false) {
      //升序
      for (let i = 0; i < this.list.length - 1; i++) {
        let maxIndex = 0
        for (let j = 0; j < this.list.length - i; j++) {
          if (this.list[j] > this.list[maxIndex]) {
            maxIndex = j
          }
        }
        this.swapItem(maxIndex, this.list.length - i - 1)
      }
      return this.toString()
    }

    // 插入排序
    insertSort() {
      let length = this.list.length
      for (let i = 1; i < length; i++) {
        let initValue = this.list[i]
        let j = i
        while (j >= 0 && this.list[j - 1] > initValue) {
          this.list[j] = this.list[j - 1]
          j--
        }
        this.list [j] = initValue
      }
      return this.toString()
    }

    // 希尔排序
    shellSort() {
      let length = this.list.length
      // 定义一个初始分组间隔gap
      let gap = Math.floor(length / 2)
      // 当 gap >= 1 的时候进行循环
      while (gap >= 1) {
        // 内层通过判断i的大小进行循环 ,对匹配的每一个值进行以gap为增量的插入排序
        for (let i = gap; i < length; i++) {
          let temp = this.list[i]
          let j = i
          //  当前的
          while (this.list[j - gap] > temp && j >= gap) {
            this.list[j] = this.list[j - gap]
            j -= gap
          }
          this.list[j] = temp
        }
        // 不断让gap的值减半并向下取整,当gap = 1 的时候就是最后一次普通插入排序
        gap = Math.floor(gap / 2)
      }

      return this.toString()
    }

    // 快速排序
    // 定义一个如何函数用来启动快速排序的递归调用
    quickSort(){
      // 开启递归
      this.quick(0,this.list.length-1)

      return this.toString()
    }

    // quick函数为quickSort的递归函数
    quick(left,right){
      //  当左索引等于右索引跳出递归
      if(left >= right) return

      const pivotValue = this.getPivot(left,right)

      //初始化两个指针用来记录数组片段左侧/右侧对应的下标值
      let startPoint = left
      let endPoint = right -1

      // 设置一个死循环,在循环中满足条件手动break
      while(true){
        // 当起点指针指向的元素大于枢纽值则停止循环
        // 当终点指针直线的元素小于枢纽值则停止循环
        while(this.list[startPoint] < pivotValue && startPoint < endPoint){
          startPoint++
        }
        while(this.list[endPoint] >= pivotValue && endPoint > startPoint){
          endPoint--
        }
        // 当终点指针索引值大于起点指针时,且前两个循环都结束
        if( startPoint < endPoint ){
          this.swapItem(startPoint,endPoint)
        }else{
          break
        }
      }
      this.swapItem(startPoint,right-1)
      // 分而治之
      this.quick(left,startPoint-1)
      this.quick(startPoint+1,right)
    }

    /**定义一个用来获取枢纽的函数(使用的是取头、中、尾三个数的中位数)
     *  @param left {number}  处理区域最左侧的索引值
     *  @param right {number} 处理区域最右侧的索引值
     *  @return {number}  枢纽所在的索引值
     * */
    getPivot(left,right){
      let center = Math.floor((left + right) / 2 )
      //修改头中尾三个位置元素的大小,使其遵循升序
      // 左中==>中右==>再左中
      if(this.list[left] > this.list[center]){
        this.swapItem(left,center)
      }
      if(this.list[center] > this.list[right]){
        this.swapItem(center,right)
      }
      if(this.list[left] > this.list[center]){
        this.swapItem(left,center)
      }

      // 上述三部结束之后left/center/right下标对应的数据就按照升序排列
      // 此时center成为了枢纽 pivot  将枢纽与下标为right-1的值进行互换
      this.swapItem(center,right-1)

      //将枢纽对应的值进行返还,由于已经互换,枢纽下标变为 right-1
      return this.list[right-1]
    }

  }