class _Graph<T> {
  private verteces: T[] = []
  private adjList = new Map<T, T[]>()

  addVertex(value: T) {
    this.verteces.push(value)
    this.adjList.set(value, [])
  }

  addEdge(v1: T, v2: T) {
    const v1Ajd = this.adjList.get(v1)!
    this.adjList.set(v1, [...v1Ajd, v2])

    const v2Ajd = this.adjList.get(v2)!
    this.adjList.set(v2, [...v2Ajd, v1])
  }

  print() {
    this.verteces.forEach((vertex) => {
      console.log(
        `${vertex} => ${this.adjList.get(vertex)?.join(' ')}`
      )
    })
  }

  // 广度优先算法
  bfs() {
    if (!this.verteces.length) return

    const queue: T[] = [this.verteces[0]]
    const visited = new Set<T>()
    visited.add(this.verteces[0])

    while (queue.length) {
      const current = queue.shift()!
      console.log(current)

      const naberhoods = this.adjList.get(current)
      if (!naberhoods) continue

      naberhoods?.forEach((item) => {
        if (!visited.has(item)) {
          queue.push(item)
          visited.add(item)
        }
      })
    }
  }

  // 深度优先算法
  dfs() {
    if (!this.verteces.length) return

    const stack: T[] = [this.verteces[0]]
    const visited = new Set<T>()
    visited.add(this.verteces[0])

    while (stack.length) {
      const current = stack.pop()!
			console.log(current)

      const naberhoods = this.adjList.get(current)
			if (!naberhoods) continue

			for(let i = naberhoods.length - 1; i >= 0; i--){
				const naber = naberhoods[i]
				if(!visited.has(naber)){
					stack.push(naber)
					visited.add(naber)
				}
			}
    }
  }
}

const _graph = new _Graph<string>()

_graph.addVertex('A')
_graph.addVertex('B')
_graph.addVertex('C')
_graph.addVertex('D')
_graph.addVertex('E')
_graph.addVertex('F')
_graph.addVertex('G')
_graph.addVertex('H')
_graph.addVertex('I')

_graph.addEdge('A', 'B')
_graph.addEdge('A', 'C')
_graph.addEdge('A', 'D')
_graph.addEdge('C', 'D')
_graph.addEdge('C', 'G')
_graph.addEdge('D', 'G')
_graph.addEdge('D', 'H')
_graph.addEdge('B', 'E')
_graph.addEdge('B', 'F')
_graph.addEdge('E', 'I')

_graph.print()
// _graph.bfs()
_graph.dfs()
