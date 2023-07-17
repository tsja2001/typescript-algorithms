import { _HashTable } from './02_hashTable'

describe('HashTable', () => {
  it('should put and get values correctly', () => {
    const hashTable = new _HashTable<number>()
    hashTable.put('apple', 1)
    hashTable.put('banana', 2)
    hashTable.put('cherry', 3)

    expect(hashTable.get('apple')).toBe(1)
    expect(hashTable.get('banana')).toBe(2)
    expect(hashTable.get('cherry')).toBe(3)
  })

  it('should update values correctly', () => {
    const hashTable = new _HashTable<number>()
    hashTable.put('apple', 1)
    hashTable.put('apple', 2)

    expect(hashTable.get('apple')).toBe(2)
  })

  it('should delete values correctly', () => {
    const hashTable = new _HashTable<number>()
    hashTable.put('apple', 1)
    hashTable.put('banana', 2)
    hashTable.put('cherry', 3)

    expect(hashTable.delete('banana')).toBe(2)
    expect(hashTable.get('banana')).toBeUndefined()
  })

  it('should resize correctly', () => {
    const hashTable = new _HashTable<number>()
    
    // 扩容测试：添加8个元素，超过0.75的负载因子
    for(let i = 1; i <= 8; i++) {
      hashTable.put(`fruit${i}`, i)
    }
    // 检查是否添加成功
    for(let i = 1; i <= 8; i++) {
      expect(hashTable.get(`fruit${i}`)).toBe(i)
    }

    // 缩容测试：删除到只剩2个元素，低于0.25的负载因子
    for(let i = 8; i > 2; i--) {
      hashTable.delete(`fruit${i}`)
    }
    // 检查是否删除成功
    for(let i = 3; i <= 8; i++) {
      expect(hashTable.get(`fruit${i}`)).toBeUndefined()
    }
    // 检查剩余的元素是否仍在哈希表中
    for(let i = 1; i <= 2; i++) {
      expect(hashTable.get(`fruit${i}`)).toBe(i)
    }
  })
})
