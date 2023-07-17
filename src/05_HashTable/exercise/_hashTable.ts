import { IHashTable } from './../types/IHashTable'
export class _HashTable<T> implements IHashTable<T> {
  storage: [string, T][][] = []
  length: number = 7
  count: number = 0
  hashFunc(key: string, max: number): number {
    let hashCode = 0
    for (let i = 0; i < key.length; i++) {
      hashCode += 31 * hashCode + key.charCodeAt(i)
    }

    return hashCode % max
  }
  isPrime(num: number): boolean {
		return true
	}
  getNextPrime(num: number): number {
    throw new Error('Method not implemented.')
  }
  put(key: string, value: T): void {
    const hashKey = this.hashFunc(key, this.length)
		if(!this.storage[hashKey]) this.storage[hashKey] = []

    const bund = this.storage[hashKey]

		
    let isUpadte = false

    for (let i = 0; i < bund.length; i++) {
      if (bund[i][0] === key) {
        bund[i][1] = value
        isUpadte = true
        break
      }
    }

    if (!isUpadte) {
			bund.push([key, value])
    }
  }
  get(key: string): T | undefined {
    const hashKey = this.hashFunc(key, this.length)
    const bund = this.storage[hashKey]

		if(!bund) return undefined

		for(let i = 0; i < bund.length; i++) {
			const [currentKey, currentValue] = bund[i]
			if(currentKey === key) return currentValue
		}

		return undefined
  }
  delete(key: string): T | undefined {
    throw new Error('Method not implemented.')
  }
  resize(newLength: number): void {
    throw new Error('Method not implemented.')
  }
}
