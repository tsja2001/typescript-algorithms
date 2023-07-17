import { TreeNode } from "src/11_平衡二叉树/lib/00_BSTree";

export interface IBSTree<T> {
  root: TreeNode<T> | null;

  insert(value: T): void;

  print(): void;

  insertNode(value: T, node: TreeNode<T>): void;

  preOrderTraverse(): void;

  preOrderTraverseNode(node: TreeNode<T> | null): void;

  inOrderTraverse(): void;

  inOrderTraverseNode(node: TreeNode<T> | null): void;

  postOrderTraverse(): void;

  postOrderTraverseNode(node: TreeNode<T> | null): void;

  levelOrderTraverse(): void;

  getMaxValue(): T | null;

  getMinValue(): T | null;

  searchNode(value: T): TreeNode<T> | null;

  search(value: T): boolean;

  remove(value: T): boolean;

  getSuccessor(delNode: TreeNode<T>): TreeNode<T>;
}
