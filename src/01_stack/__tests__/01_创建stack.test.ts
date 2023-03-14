import { Stack } from '../01_创建stack'

describe('Stack', () => {
  let stack: any = null

  beforeEach(() => {
    stack = new Stack()
  })

  it('should add, remove, and pick elements correctly', () => {
    // Test push method
    stack.push('111')
    expect(stack.isEmpty()).toBe(false)
    stack.push('222')
    expect(stack.pick()).toBe('222')

    // Test pop method
    expect(stack.pop()).toBe('222')
    expect(stack.pick()).toBe('111')

    // Test isEmpty method
    expect(stack.isEmpty()).toBe(false)
    stack.pop()
    expect(stack.isEmpty()).toBe(true)

    // Test push and pick methods again
    stack.push('333')
    expect(stack.isEmpty()).toBe(false)
    expect(stack.pick()).toBe('333')
  })
})
