import { BSTree } from '../lib/01_BSTree';

describe('BSTree', () => {
  let bstree: BSTree<number>;

  beforeEach(() => {
    bstree = new BSTree<number>();
  });

  describe('insert', () => {
    it('should insert node in the empty tree', () => {
      bstree.insert(5);

      expect(bstree.root).not.toBeNull();
      expect(bstree.root?.value).toBe(5);
    });

    it('should insert nodes correctly in the tree', () => {
      bstree.insert(5);
      bstree.insert(3);
      bstree.insert(7);
      bstree.insert(1);
      bstree.insert(9);

      expect(bstree.root?.value).toBe(5);
      expect(bstree.root?.left?.value).toBe(3);
      expect(bstree.root?.right?.value).toBe(7);
      expect(bstree.root?.left?.left?.value).toBe(1);
      expect(bstree.root?.right?.right?.value).toBe(9);
    });
  });
});
