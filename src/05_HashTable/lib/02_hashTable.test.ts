import { HashTable } from './02_hashTable'

describe('HashTable', () => {
  it('should put and get values correctly', () => {
    const hashTable = new HashTable<number>()
    hashTable.put('apple', 1)
    hashTable.put('banana', 2)
    hashTable.put('cherry', 3)

    expect(hashTable.get('apple')).toBe(1)
    expect(hashTable.get('banana')).toBe(2)
    expect(hashTable.get('cherry')).toBe(3)
  })

  it('should update values correctly', () => {
    const hashTable = new HashTable<number>()
    hashTable.put('apple', 1)
    hashTable.put('apple', 2)

    expect(hashTable.get('apple')).toBe(2)
  })

  it('should delete values correctly', () => {
    const hashTable = new HashTable<number>()
    hashTable.put('apple', 1)
    hashTable.put('banana', 2)
    hashTable.put('cherry', 3)

    expect(hashTable.delete('banana')).toBe(2)
    expect(hashTable.get('banana')).toBeUndefined()
  })

  it('should resize correctly', () => {
    const hashTable = new HashTable<number>()
    hashTable.put('apple', 1)
    hashTable.put('banana', 2)
    hashTable.put('cherry', 3)

    // 扩容
    hashTable.put('durian', 4)
    expect(hashTable.get('durian')).toBe(4)

    // 缩容
    hashTable.delete('durian')
    hashTable.delete('cherry')
    expect(hashTable.get('cherry')).toBeUndefined()
  })
})
