import { _Stack } from "./_stack"

type funType = (num: number) => string

const trans: funType = (num: number) => {
	const stack = new _Stack<number>()

	let left = num
	while(left > 0){
		stack.push(left % 2)
		left = Math.floor(left / 2)
	}

	let resStr = ''

	while(!stack.isEmpty()){
		resStr += stack.pop()
	}

	return resStr
}

const res = trans(10)

console.log(res)
