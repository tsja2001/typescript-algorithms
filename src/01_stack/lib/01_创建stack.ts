export class Stack {
  private data: any[] = []

  pop(): any {
    return this.data.pop()
  }

  push(element: any): void {
    this.data.push(element)
  }

  pick(): any {
    return this.data[this.data.length - 1]
  }

  isEmpty(): Boolean {
    return !this.data.length
  }
}

const stack = new Stack()

stack.push('111')
stack.push('222')

console.log(stack.pick())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())

// module.exports = {
//   Stack
// }
