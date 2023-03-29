// A -> A C D
// B -> A E F
// C -> A D G
// D -> A C G H
// E -> B I
// F -> B
// G -> C D
// H -> D
// I -> E

export class Graph<T> {
  // 顶点
  private verteces: T[] = []
  // 边: 邻接表 addJoinList
  private adjList: Map<T, T[]> = new Map()

  addVertex(vertex: T) {
    this.verteces.push(vertex)
    this.adjList.set(vertex, [])
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  traverse() {
    console.log('Graph:')
    this.verteces.forEach((vertex) => {
      const edges = this.adjList.get(vertex)
      console.log(`${vertex} => ${edges?.join(' ')}`)
    })
  }

  // 广度优先遍历
  gfs() {
    if (this.verteces.length === 0) return

    // 用于存放要遍历的队列
    const queue: T[] = []
    queue.push(this.verteces[0])

    // 用于存放已经遍历的节点
    const visited = new Set<T>()
    visited.add(this.verteces[0])

    while (queue.length) {
      const vertex = queue.shift()!
      console.log(vertex)

      // 找到当前节点的邻居节点
      const naberhood = this.adjList.get(vertex)
      if (!naberhood) continue

      for(let i = 0; i < naberhood.length; i++) {
        const currentNaber = naberhood[i]
        // 如果当前邻居节点未遍历, 将其入队
        if (!visited.has(currentNaber)) {
          queue.push(currentNaber)
          visited.add(currentNaber)
        }
      }
    }
  }

  // 深度优先遍历
  dfs() {
    if (this.verteces.length === 0) return

    // 用于存放要遍历的栈
    const stack: T[] = []
    stack.push(this.verteces[0])

    // 用于存放已经遍历过的节点
    const visited = new Set<T>()
    visited.add(this.verteces[0])

    while (stack.length) {
      const vertex = stack.pop()!
      console.log(vertex)

      // 找到当前节点的邻居节点
      const naberhood = this.adjList.get(vertex)
      if (!naberhood) continue

      for (let i = naberhood.length - 1; i >= 0; i--) {
        const currentNaber = naberhood[i]
        // 如果当前邻居节点未遍历, 将其入栈
        if (!visited.has(currentNaber)) {
          stack.push(currentNaber)
          visited.add(currentNaber)
        }
      }
    }
  }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

graph.traverse()
graph.gfs()
// graph.dfs()
