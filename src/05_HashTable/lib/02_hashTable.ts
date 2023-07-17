import { IHashTable } from './../types/IHashTable';
export class _HashTable<T> implements IHashTable<T> {
  // 存放链地址法中的链
  storage: [string, T][][] = []
  // 数组长度
  length: number = 7
  // 记录已经存放元素的个数
  count: number = 0

  // 获取一个字符串的哈希值
  hashFunc(key: string, max: number): number {
    let hashCode = 0
    const length = key.length
    for (let i = 0; i < length; i++) {
      hashCode += 31 * hashCode + key.charCodeAt(i)
    }

    const index = hashCode % max

    return index
  }

  isPrime(num: number) {
    // 获取平方根
    const square = Math.sqrt(num)
    for (let i = 2; i <= square; i++) {
      if (num % i === 0) {
        return false
      }
    }

    return true
  }

  getNextPrime(num: number) {
    let resNum = num

    while (!this.isPrime(resNum)) {
      resNum++
    }

    return resNum
  }

  // 增加或者更新元素
  put(key: string, value: T) {
    // 拿到当前key应该存放在的索引位置
    const index = this.hashFunc(key, this.length)

    // 拿到索引所在的桶
    let bucket = this.storage[index]

    if (!bucket) {
      bucket = []
      this.storage[index] = bucket
    }

    let length = bucket.length
    let isUpdate = false
    for (let i = 0; i < length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if (tupleKey === key) {
        tuple[1] = value
        isUpdate = true
      }
    }

    if (!isUpdate) {
      bucket.push([key, value])
      this.count++

      // 如果比例大于0.75, 那么就直接扩容
      const loadFactor = this.count / this.length
      if (loadFactor >= 0.75) {
        this.resize(this.length * 2)
      }
    }
  }

  // 根据key获取value
  get(key: string) {
    const hashCode = this.hashFunc(key, this.length)

    const bucket = this.storage[hashCode]

    if (!bucket) return undefined

    const length = bucket.length
    for (let i = 0; i < length; i++) {
      let tuple = bucket[i]
      let tupleKey = tuple[0]
      let tupleValue = tuple[1]
      if (tupleKey === key) return tupleValue
    }

    return undefined
  }

  // 删除
  delete(key: string) {
    const hashCode = this.hashFunc(key, this.length)
    const bucket = this.storage[hashCode]

    if (!bucket) return undefined

    const length = bucket.length
    for (let i = 0; i < length; i++) {
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]

      if (tupleKey === key) {
        bucket.splice(i, 1)
        this.count--

        // 如果比例大于0.75, 那么就直接扩容
        const loadFactor = this.count / this.length
        if (loadFactor <= 0.25 && this.length > 7) {
          const length = Math.floor(this.length / 2)
          this.resize(length)
        }
        return tupleValue
      }
    }

    return undefined
  }

  // 扩容和缩容
  resize(length: number) {
    const newLength = this.getNextPrime(length)
    this.length = newLength < 7 ? 7 : newLength
    this.count = 0
    const oldStore = this.storage
    this.storage = []

    oldStore.forEach((bucket) => {
      if (!bucket) return
      for (let i = 0; i < bucket.length; i++) {
        const tuble = bucket[i]
        this.put(tuble[0], tuble[1])
      }
    })
  }
}

const hashTable = new _HashTable<number>()

hashTable.put('aaa', 56)
hashTable.put('dfsf', 232)
hashTable.put('vxcvxcv', 75)
hashTable.put('erw', 75)
hashTable.put('r', 75)

// console.log(hashTable.get('aaa'))
// console.log(hashTable.get('dfsf'))
// console.log(hashTable.get('vxcvxcv'))

console.log(hashTable.length)
hashTable.put('fff', 75)
// console.log('-------')
console.log(hashTable.length)

hashTable.delete('aaa')
hashTable.delete('dfsf')
hashTable.delete('vxcvxcv')
hashTable.delete('erw')
hashTable.delete('r')
console.log(hashTable.length)

// console.log(hashTable.get('aaa'))
// console.log(hashTable.get('bbb'))
// console.log(hashTable.get('ccc'))
// console.log(hashTable.get('ccc'))
// console.log(hashTable.get('ccc'))
// console.log(hashTable.get('ccc'))

// console.log(hashTable.get('ccc'))
