import { TreeNode } from "src/11_平衡二叉树/lib/00_BSTree";

export interface IBSTree<T> {
  root: TreeNode<T> | null;

  insert(value: T): void;
  
  print(): void;

  preOrderTraverse(): void;

  inOrderTraverse(): void;

  postOrderTraverse(): void;

  levelOrderTraverse(): void;

  getMaxValue(): T | null;

  getMinValue(): T | null;

  search(value: T): boolean;
}
