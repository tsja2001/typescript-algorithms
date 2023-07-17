import { _BSTree as BSTree } from '../_BSTree';

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

  // test('getMaxValue and getMinValue should return correct values', () => {
  //   [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
  //   expect(bstree.getMaxValue()).toBe(8);
  //   expect(bstree.getMinValue()).toBe(2);
  // });

	test('searchNode should return correct node result', () => {
		[5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
		// expect(bstree.searchNode(7)) => Node { value: 7, left: Node { value: 6, left: null, right: null }, right: Node { value: 8, left: null, right: null } }
		expect(bstree.searchNode(7).value).toBe(7);
    expect(bstree.searchNode(7).parent).toBe(bstree.searchNode(5));
		expect(bstree.searchNode(1)).toBeNull();
	})

  // test('search should return correct result', () => {
  //   [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
  //   expect(bstree.search(7)).toBeTruthy();
  //   expect(bstree.search(1)).toBeFalsy();
  // });

  // test('preOrderTraverse prints values in correct order', () => {
  //   const mockPrint = jest.spyOn(console, 'log');
  //   [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
  //   bstree.preOrderTraverse();
  //   expect(mockPrint.mock.calls.map(call => call[0])).toEqual([5, 3, 2, 7, 6, 8]);
  //   mockPrint.mockRestore();
  // });

  // test('inOrderTraverse prints values in correct order', () => {
  //   const mockPrint = jest.spyOn(console, 'log');
  //   [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
  //   bstree.inOrderTraverse();
  //   expect(mockPrint.mock.calls.map(call => call[0])).toEqual([2, 3, 5, 6, 7, 8]);
  //   mockPrint.mockRestore();
  // });

  // test('postOrderTraverse prints values in correct order', () => {
  //   const mockPrint = jest.spyOn(console, 'log');
  //   [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
  //   bstree.postOrderTraverse();
  //   expect(mockPrint.mock.calls.map(call => call[0])).toEqual([2, 3, 6, 8, 7, 5]);
  //   mockPrint.mockRestore();
  // });

  // test('levelOrderTraverse prints values in correct order', () => {
  //   const mockPrint = jest.spyOn(console, 'log');
  //   [5, 3, 7, 2, 6, 8].forEach(val => bstree.insert(val));
  //   bstree.levelOrderTraverse();
  //   expect(mockPrint.mock.calls.map(call => call[0])).toEqual([5, 3, 7, 2, 6, 8]);
  //   mockPrint.mockRestore();
  // });
});
