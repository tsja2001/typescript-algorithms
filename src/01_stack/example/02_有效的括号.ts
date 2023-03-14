import { Stack } from '../lib/02_重构stack'

export const isValid = (s: string) => {
  const stack = new Stack<string>()

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')')
        break
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      case ')':
        if (stack.pop() !== ')') {
          return false
        }
        break
      case '}':
        if (stack.pop() !== '}') {
          return false
        }
        break
      case ']':
        if (stack.pop() !== ']') {
          return false
        }
        break
    }
  }

  return stack.isEmpty()
}


const res = isValid('[()]')
console.log(res)
