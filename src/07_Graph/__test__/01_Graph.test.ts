import { Graph } from './../lib/01_Graph'

describe('Graph', () => {
  let graph: Graph<number>

  beforeEach(() => {
    graph = new Graph<number>()
    graph.addVertex(1)
    graph.addVertex(2)
    graph.addVertex(3)
    graph.addVertex(4)
    graph.addVertex(5)
    graph.addEdge(1, 2)
    graph.addEdge(1, 3)
    graph.addEdge(2, 4)
    graph.addEdge(3, 5)
  })

  test('addVertex', () => {
    graph.addVertex(6)
    expect(graph['verteces']).toContain(6)
    expect(graph['adjList'].get(6)).toEqual([])
  })

  test('addEdge', () => {
    graph.addEdge(4, 5)
    expect(graph['adjList'].get(4)).toContain(5)
    expect(graph['adjList'].get(5)).toContain(4)
  })

  test('traverse', () => {
    const logSpy = jest.spyOn(console, 'log')
    graph.traverse()
    expect(logSpy).toHaveBeenCalledTimes(5)
    expect(logSpy).toHaveBeenNthCalledWith(1, '1 => 2 3')
    expect(logSpy).toHaveBeenNthCalledWith(2, '2 => 1 4')
    expect(logSpy).toHaveBeenNthCalledWith(3, '3 => 1 5')
    expect(logSpy).toHaveBeenNthCalledWith(4, '4 => 2')
    expect(logSpy).toHaveBeenNthCalledWith(5, '5 => 3')
    logSpy.mockRestore()
  })

  test('gfs', () => {
    const logSpy = jest.spyOn(console, 'log')
    graph.gfs()
    expect(logSpy).toHaveBeenCalledTimes(5)
    expect(logSpy).toHaveBeenNthCalledWith(1, 1)
    expect(logSpy).toHaveBeenNthCalledWith(2, 2)
    expect(logSpy).toHaveBeenNthCalledWith(3, 3)
    expect(logSpy).toHaveBeenNthCalledWith(4, 4)
    expect(logSpy).toHaveBeenNthCalledWith(5, 5)
    logSpy.mockRestore()
  })

  test('dfs', () => {
    const logSpy = jest.spyOn(console, 'log')
    graph.dfs()
    expect(logSpy).toHaveBeenCalledTimes(5)
    expect(logSpy).toHaveBeenNthCalledWith(1, 1)
    expect(logSpy).toHaveBeenNthCalledWith(2, 2)
    expect(logSpy).toHaveBeenNthCalledWith(3, 4)
    expect(logSpy).toHaveBeenNthCalledWith(4, 3)
    expect(logSpy).toHaveBeenNthCalledWith(5, 5)
    logSpy.mockRestore()
  })
})
