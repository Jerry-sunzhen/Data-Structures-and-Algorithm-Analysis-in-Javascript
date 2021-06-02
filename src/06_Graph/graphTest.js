import Graph from "./06_Graph/01_Graph";

const graph = new Graph()

// 向图中加入A-G顶点
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addVertex("G")

// 添加各个顶点之间的边
graph.addEdge("A","B")
graph.addEdge("A","E")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("B","E")
graph.addEdge("C","F")
graph.addEdge("D","E")
graph.addEdge("E","F")
graph.addEdge("E","G")


console.log(graph.toString());
