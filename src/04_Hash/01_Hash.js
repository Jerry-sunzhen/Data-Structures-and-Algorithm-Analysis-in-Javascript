// 哈希表

//1. 基于数组实现
//2. 表中数据没有顺序,因此无法进行遍历
//3. key值不允许重复


// 哈希表一般由数组+链表组成
// 可以使用哈希函数对键名进行处理,返回一个在某固定区间内的数字,然后插入数组中
// 缠身哈希冲突一般有两种解决方法 ①链地址法  ②开放地址法
// 一般使用链地址法,因为该方法在查找的时候的探测长度远小于开放地址法

// 在定义数组长度的时候尽量使用质数,


/*
哈希表的组成结构
|--storage
|----bucket
|------tuple
*/

const MAX_LOAD_FACTOR=0.75
const MIN_LOAD_FACTOR=0.25

export default class HashTable{
  constructor() {
    //定义一个数组用来存放元素
    this.storage=[]
    //定义count来表示storage中的元素个数
    this.count=0
    //规定默认总个数为7,一般该值为质数
    this.limit=7
  }

  /**
   * 封装一个哈希函数(使用了霍纳算法对多项式进行处理,提取公因子)
   * ax^4+bx^3+cx^2+dx+e==> ((((a)x+b)x+c)x+d)x+e  提取为n层(n为字符串的长度,常量为字符串中字符的unicode编码)
   * @param str {String} 需要哈希化的变量名
   * @param limit {Number} 哈希函数返回码的区间范围
   * @return {Number}
   * */
  hashFunc(str,limit=this.limit){
    //传入的limit的值最好也为质数
    let hashCode=0
    let x=33 //此处的x值最好为一个质数
    for(let i=0 ; i<str.length ;i++){
      hashCode=hashCode * x + str.charCodeAt(i)
    }
    return hashCode % limit   //返回取余limit后的值
  }

  /**
   * 添加新的键值对到哈希表中
   * @param key {String}
   * @param value {String}
   * */
  put(key,value){
    //获取哈希函数的值作为storage的索引值
    const index=this.hashFunc(key)
    //定义一个链地址法作用的数组
    let bucket=this.storage[index]
    if(!bucket){
      this.storage[index]=[]
      bucket=this.storage[index]
    }
    //循环遍历判断bucket中的元组是否含有传入的key值,如果有就将key值对应的value替换
    //设置标记变量用来判断bucket是被修改还是插入
    let flag=false
    for(let i = 0 ; i<bucket.length ; i++){
      if(bucket[i][0]===key){
        bucket[i][1]=value
        flag=true
      }
    }
    if(!flag){
      bucket.push([key,value])
      //长度自增
      this.count++
      //自增后判断装载因子是否大于0.75,如果大于则进行扩容
      if(this.count>MAX_LOAD_FACTOR*this.limit){
        const newLimit=this.getPrime(this.limit*2)
        this.resize(newLimit)
      }
    }
    return this.count
  }

  /**
   * 查找哈希表中的元素
   * @param key {String} 对应的键名
   * @return {String}
   * */
  get(key){
    const index=this.hashFunc(key)
    let bucket = this.storage[index]
    if(!bucket){
      return undefined
    }
    for(let i=0 ;i<bucket.length ; i++){
      if(bucket[i][0]===key){
        return bucket[i][1]
      }
    }
    return undefined
  }

  remove(key){
    const index=this.hashFunc(key)
    let bucket = this.storage[index]
    if(!bucket.length){
      return undefined
    }
    for(let i=0 ;i<bucket.length ; i++){
      if(bucket[i][0]===key){
        this.count--
        //将bucket中满足key值的元素通过splice移除
        let result=bucket.splice(i,1)[0][1]
        //自减后判断装载因子是否小于0.25,如果小于则进行缩减
        if(this.count< MIN_LOAD_FACTOR * this.limit && this.limit > 7){
          const newLimit=this.getPrime(Math.floor(this.limit/2))
          this.resize(newLimit)
        }
        //返回key所对应的value
        return result
      }
    }
    return undefined
  }

  isEmpty(){
    return !this.count
  }

  size(){
    return this.count
  }

  /**
   * resize函数负责对storage的长度进行处理
   * @param newLimit {Number}
   * */
  resize(newLimit){
    //创建一个新变量用来接收对原有的storage并将原有的storage置空
    const oldStorage=this.storage
    this.storage=[]
    this.limit=newLimit
    //注意此处需要将count的值置空
    this.count=0
    oldStorage.forEach(bucket=>{
      if(bucket){
        for(let i=0 ; i<bucket.length ; i++){
          this.put(bucket[i][0],bucket[i][1])
        }
      }
    })
  }

  /**
   * getPrime函数用来获取质数
   * @param number {Number}
   * @return {Number}
   * */
  getPrime(number){
    return this.isPrime(number) ? number : this.getPrime(++number)
  }

  /**
   * isPrime函数用来判断是否为质数
   * @param number {Number}
   * @return {Boolean}
   * */
  isPrime(number){
    for(let i=2;i<=Math.sqrt(number);i++){
      if(number % i ===0){
        return false
      }
    }
    return true
  }
}