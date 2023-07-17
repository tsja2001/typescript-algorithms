import { BSTree } from '../lib/01_BSTree';

describe('BSTree', () => {
  let bstree: any;

  beforeEach(() => {
    bstree = new BSTree();
  });

  test('root should be null after creation', () => {
    expect(bstree.root).toBeNull();
  });

  test('insert method should work correctly', () => {
    bstree.insert(5);
    expect(bstree.root.value).toBe(5);
    bstree.insert(3);
    expect(bstree.root.left.value).toBe(3);
    bstree.insert(7);
    expect(bstree.root.right.value).toBe(7);
  });

  test('getMaxValue and getMinValue should return correct values', () => {
    [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
    expect(bstree.getMaxValue()).toBe(8);
    expect(bstree.getMinValue()).toBe(2);
  });

  test('search should return correct result', () => {
    [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
    expect(bstree.search(7)).toBeTruthy();
    expect(bstree.search(1)).toBeFalsy();
  });

  test('preOrderTraverse prints values in correct order', () => {
    const mockPrint = jest.spyOn(console, 'log');
    [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
    bstree.preOrderTraverse();
    expect(mockPrint.mock.calls.map(call => call[0])).toEqual([5, 3, 2, 7, 6, 8]);
    mockPrint.mockRestore();
  });

  test('inOrderTraverse prints values in correct order', () => {
    const mockPrint = jest.spyOn(console, 'log');
    [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
    bstree.inOrderTraverse();
    expect(mockPrint.mock.calls.map(call => call[0])).toEqual([2, 3, 5, 6, 7, 8]);
    mockPrint.mockRestore();
  });

  test('postOrderTraverse prints values in correct order', () => {
    const mockPrint = jest.spyOn(console, 'log');
    [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
    bstree.postOrderTraverse();
    expect(mockPrint.mock.calls.map(call => call[0])).toEqual([2, 3, 6, 8, 7, 5]);
    mockPrint.mockRestore();
  });

  test('levelOrderTraverse prints values in correct order', () => {
    const mockPrint = jest.spyOn(console, 'log');
    [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
    bstree.levelOrderTraverse();
    expect(mockPrint.mock.calls.map(call => call[0])).toEqual([5, 3, 7, 2, 6, 8]);
    mockPrint.mockRestore();
  });

  describe('BSTree', () => {
    let bst: BSTree<number>;
  
    beforeEach(() => {
      bst = new BSTree();
      bst.insert(8);
      bst.insert(3);
      bst.insert(10);
      bst.insert(1);
      bst.insert(6);
      bst.insert(14);
      bst.insert(4);
      bst.insert(7);
      bst.insert(13);
    });
  
    // Case 1: 删除没有子节点的节点
    test('should remove a node without children', () => {
      // 删除节点1，它是节点3的左子节点
      bst.remove(1);
      expect(bst.search(1)).toBeFalsy();
      expect(bst?.root?.left?.left).toBeNull();
  
      // 删除节点7，它是节点6的右子节点
      bst.remove(7);
      expect(bst.search(7)).toBeFalsy();
      expect(bst?.root?.left?.right?.right).toBeNull();
    });
  
    // Case 2: 删除有一个子节点的节点
    test('should remove a node with one child', () => {
      // 删除节点6，它是节点3的右子节点，节点4是它的左子节点
      bst.remove(6);
      expect(bst.search(6)).toBeFalsy();
      expect(bst?.root?.left?.right?.value).toBe(7);
  
      // 删除节点14，它是节点10的右子节点，节点13是它的左子节点
      bst.remove(14);
      expect(bst.search(14)).toBeFalsy();
      expect(bst?.root?.right?.right?.value).toBe(13);
    });
  
    // Case 3: 删除有两个子节点的节点
    test('should remove a node with two children', () => {
      // 删除节点3，它是节点8的左子节点，节点4和节点8是它的子节点
      bst.remove(3);
      expect(bst.search(3)).toBeFalsy();
      expect(bst?.root?.left?.value).toBe(4);
      expect(bst?.root?.left?.right?.value).toBe(6);
    });
  });
});
