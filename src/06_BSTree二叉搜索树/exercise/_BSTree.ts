import { btPrint } from 'hy-algokit'

import { Node } from '../../00_types/Node'
import { IBSTree } from '../type/IBSTree'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null

  get isLeft() {
    return this === this.parent?.left
  }
  get isRight() {
    return this === this.parent?.right
  }
}

export class _BSTree<T> implements IBSTree<T> {
  preOrderTraverse(): void {
    throw new Error('Method not implemented.')
  }
  root: TreeNode<T> | null = null
  insert(value: T): void {
    if (!this.root) {
      this.root = new TreeNode<T>(value)
    } else {
      this.insertNode(value, this.root)
    }
  }
  print(): void {
    btPrint(this.root)
  }
  insertNode(value: T, node: TreeNode<T>): void {
    if (value >= node.value) {
      if (node.right) {
        this.insertNode(value, node.right)
      } else {
        node.right = new TreeNode<T>(value)
      }
    } else {
      if (node.left) {
        this.insertNode(value, node.left)
      } else {
        node.left = new TreeNode<T>(value)
      }
    }
  }
  preOrderTraverseNode(node: TreeNode<T> | null): void {
    throw new Error('Method not implemented.')
  }
  inOrderTraverse(): void {
    throw new Error('Method not implemented.')
  }
  inOrderTraverseNode(node: TreeNode<T> | null): void {
    throw new Error('Method not implemented.')
  }
  postOrderTraverse(): void {
    throw new Error('Method not implemented.')
  }
  postOrderTraverseNode(node: TreeNode<T> | null): void {
    throw new Error('Method not implemented.')
  }
  levelOrderTraverse(): void {
    throw new Error('Method not implemented.')
  }
  getMaxValue(): T | null {
    throw new Error('Method not implemented.')
  }
  getMinValue(): T | null {
    throw new Error('Method not implemented.')
  }
  searchNode(value: T): TreeNode<T> | null {
    let currentNode: TreeNode<T> | null = this.root
    let parentNode: TreeNode<T> | null = null

    while (currentNode) {
      if (currentNode.value === value) {
        currentNode.parent = parentNode
        return currentNode
      } else if (value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      }
    }

    return null
  }
  search(value: T): boolean {
    this.searchNode(value) !== null
  }
  remove(value: T): boolean {
    throw new Error('Method not implemented.')
  }
  getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    throw new Error('Method not implemented.')
  }
}
