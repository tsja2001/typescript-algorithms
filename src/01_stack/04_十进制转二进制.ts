// import { Stack } from './01_创建stack';
import { Stack } from './02_重构stack'

export const decimalToBinary: (decimal: number) => string = (
  decimal
) => {
  const stact = new Stack<number>()

  let left = decimal

  while (left > 0) {
    const isOdd = left % 2
    stact.push(isOdd)

    left = (left - isOdd) / 2
  }

  let resString = []

  const size = stact.size()

  for (let i = 0; i < size; i++) {
    resString.push(stact.pop())
  }

  return resString.join('')
}

const res = decimalToBinary(10)
console.log(res)

// 0 0000
// 1 0001
// 2 0010
// 3 0011
// 4 0100
// 5 0101
// 6 0110
// 7 0111
// 8 1000
// 9 1001
// 101010

// const stack = new Stack<string>()
// stack.push('1')
// stack.push('2')
// stack.push('3')

// console.log(stack.size())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.size())
