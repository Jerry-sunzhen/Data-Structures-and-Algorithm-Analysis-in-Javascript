export default // 图结构由顶点(vertex)和边(edge)构成
//如下定义的Graph类为无向无权图
class Graph {
  constructor() {
    // 用来存放图结构中的所有顶点
    this.vertexes = []
    // 将edges中的key值与数组vertexes中的值进行关联,value值为其他顶点的信息
    this.edges = {}
  }

  /**
   * 创建新的vertex
   * @param vertex {string}
   * */
  addVertex(vertex) {
    // 在顶点数组中添加key值
    this.vertexes.push(vertex)
    // 在存放边的信息的对象中创建键为key,值为一个空的新数组
    this.edges[vertex] = []
  }

  /**
   * 创建vertex之间的边
   * */
  addEdge(prevVertex, nextVertex) {
    //判断是否存在传入的顶点
    if (this.edges[prevVertex] === undefined || this.edges[nextVertex] === undefined) return false
    //将prevVertex与nextVertex相互进行边的关联
    this.edges[prevVertex].push(nextVertex)
    this.edges[nextVertex].push(prevVertex)
  }

  /**
   *
   * */
  toString() {
    let graphString = ""
    //遍历vertex和对应的edge
    this.vertexes.forEach(vertex => {
      graphString += vertex + " -> "
      //获取edges中对应vertex的数组
      this.edges[vertex].forEach(edge => {
        graphString += edge + " "
      })
      //每遍历完一个顶点的边就进行换行
      graphString += "\n"
    })
    return graphString
  }
}