import { bubbleSort } from "../01_bubbleSort"

describe('bubbleSort', () => {
	it('bubbleSort test', () => {
		let arr =  [9, 5, 8, 3, 1, 0]
		const res = bubbleSort(arr)
		expect(res).toEqual([ 0, 1, 3, 5, 8, 9 ])
	})
})
