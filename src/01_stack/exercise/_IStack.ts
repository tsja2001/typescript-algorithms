export interface _IStack<T> {
	push: (element: T) => void
	pop: () => T | undefined
	isEmpty: () => boolean
	pick: () =>  T | undefined
	size: () => number
}
