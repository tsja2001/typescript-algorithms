class HashTable<T = any> {
  // 存放链地址法中的链
  private storage: [string, T][][] = []
  // 数组长度
  private length: number = 7
  // 记录已经存放元素的个数
  private count: number = 0

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
        return tupleValue
      }
    }

    return undefined
  }
}

const hashTable = new HashTable<number>()

hashTable.put('aaa', 56)
hashTable.put('bbb', 232)
hashTable.put('ccc', 75)

console.log(hashTable.get('aaa'))
console.log(hashTable.get('bbb'))
console.log(hashTable.get('ccc'))

console.log('delete', hashTable.delete('ccc'))
console.log('get', hashTable.get('ccc'))
// console.log(hashTable.get('ccc'))
