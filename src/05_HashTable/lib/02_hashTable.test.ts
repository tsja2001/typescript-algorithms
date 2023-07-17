import { HashTable } from './02_hashTable'; // 注意：你可能需要修改这个路径使其指向你的实现文件。

describe('HashTable', () => {
  let hashTable: any

  beforeEach(() => {
    hashTable = new HashTable();
  });

  test('hashFunc method', () => {
    expect(hashTable.hashFunc('key1', 7)).toBeLessThan(7);
  });

  test('isPrime method', () => {
    expect(hashTable.isPrime(2)).toBe(true);
    expect(hashTable.isPrime(3)).toBe(true);
    expect(hashTable.isPrime(4)).toBe(false);
    expect(hashTable.isPrime(5)).toBe(true);
  });

  test('getNextPrime method', () => {
    expect(hashTable.getNextPrime(8)).toBe(11);
    expect(hashTable.getNextPrime(14)).toBe(17);
  });

  test('put and get methods', () => {
    hashTable.put('key1', 'value1');
    expect(hashTable.get('key1')).toBe('value1');

    hashTable.put('key2', 'value2');
    expect(hashTable.get('key2')).toBe('value2');

    // 测试更新值的功能
    hashTable.put('key1', 'new_value1');
    expect(hashTable.get('key1')).toBe('new_value1');
  });

  test('delete method', () => {
    hashTable.put('key1', 'value1');
    hashTable.put('key2', 'value2');

    hashTable.delete('key1');
    expect(hashTable.get('key1')).toBeUndefined();

    // 确保只删除了 'key1'
    expect(hashTable.get('key2')).toBe('value2');
  });

  test('resize method', () => {
    for(let i = 0; i < 100; i++) {
      hashTable.put(`key${i}`, `value${i}`);
    }

    // 确保元素在扩容后还在
    for(let i = 0; i < 100; i++) {
      expect(hashTable.get(`key${i}`)).toBe(`value${i}`);
    }

    for(let i = 0; i < 75; i++) {
      hashTable.delete(`key${i}`);
    }

    // 确保元素在缩容后还在
    for(let i = 75; i < 100; i++) {
      expect(hashTable.get(`key${i}`)).toBe(`value${i}`);
    }
  });
});
