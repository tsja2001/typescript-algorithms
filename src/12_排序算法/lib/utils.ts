export const swap = (arr: any[], i: number, j: number) => {
	const arri = arr[i]
	arr[i] = arr[j]
	arr[j] = arri
}
