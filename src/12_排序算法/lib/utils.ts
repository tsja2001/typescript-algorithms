export const swap = (arr: any[], i: number, j: number) => {
	const arri = arr[i]
	arr[i] = arr[j]
	arr[j] = arri
}

export function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const res = shuffle([1,2,3,4,5,6,7])
console.log(res)
