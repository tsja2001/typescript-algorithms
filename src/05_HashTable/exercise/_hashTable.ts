import { IHashTable } from './../types/IHashTable'
export class _HashTable<T> implements IHashTable<T> {
  storage: [string, T][][] = []
  public length: number = 7
  public count: number = 0
  hashFunc(key: string, max: number): number {
    let hashCode = 0
    for (let i = 0; i < key.length; i++) {
      hashCode += 31 * hashCode + key.charCodeAt(i)
    }

    return hashCode % max
  }
  isPrime(num: number): boolean {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false
    }

    return true
  }
  getNextPrime(num: number): number {
    let currentNum = num + 1
    while (!this.isPrime(currentNum)) {
      currentNum++
    }

    return currentNum
  }
  put(key: string, value: T): void {
    const hashKey = this.hashFunc(key, this.length)
    if (!this.storage[hashKey]) this.storage[hashKey] = []

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
    this.count ++
  }
  get(key: string): T | undefined {
    const hashKey = this.hashFunc(key, this.length)
    const bund = this.storage[hashKey]

    if (!bund) return undefined

    for (let i = 0; i < bund.length; i++) {
      const [currentKey, currentValue] = bund[i]
      if (currentKey === key) return currentValue
    }

    return undefined
  }
  delete(key: string): T | undefined {
    const hashKey = this.hashFunc(key, this.length)
    const bund = this.storage[hashKey]

    if (!bund) return undefined

    for (let i = 0; i < bund.length; i++) {
      const [currentKey] = bund[i]
      if (currentKey === key) {
        const deleteOne = bund.splice(i, 1)[0]
        return deleteOne[1]
      }
    }

    return undefined
  }
  resize(newLength: number): void {
    const oldStore = this.storage
    this.length = newLength
    
    oldStore.forEach((itembund) => {
      itembund?.forEach((item) => {
        this.put(item[0], item[1])
      })
    })
    
  }
}
