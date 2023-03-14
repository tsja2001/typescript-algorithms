import { _Stack } from './_stack'

type funType = (str: string) => boolean

const isValid: funType = (str) => {
  if (str.length % 2 !== 0) return false

  const stack = new _Stack<string>()

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break

      default:
        if (stack.pop() !== str[i]) return false
        break
    }
  }

  if (stack.isEmpty()) {
    return true
  } else {
    return false
  }
}


console.log('()([]{})' , isValid('()([]{})')) 
console.log('(()([)]{})' , isValid('(()([)]{})')) 
console.log('()(]{})' , isValid('()(]{})')) 
console.log('()([]{{}})' , isValid('()([]{{}})')) 
