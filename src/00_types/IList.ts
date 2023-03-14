export interface IList<T> {
	pick: () => T | undefined
	isEmpty: () => boolean
	size: () => number
}
