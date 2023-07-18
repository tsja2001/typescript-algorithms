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
  preOrderTraverse(): void {
    this.preOrderTraverseNode(this.root)
  }
  preOrderTraverseNode(node: TreeNode<T> | null): void {
    if (node) {
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }
  inOrderTraverse(): void {
    this.inOrderTraverseNode(this.root)
  }
  inOrderTraverseNode(node: TreeNode<T> | null): void {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }
  postOrderTraverse(): void {
    this.postOrderTraverseNode(this.root)
  }
  postOrderTraverseNode(node: TreeNode<T> | null): void {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }
  levelOrderTraverse(): void {
    if (this.root === null) return

    let currentNode: TreeNode<T> | null = null

    const queue: TreeNode<T>[] = [this.root]

    while (queue.length) {
      const queueItem = queue.shift()!
      console.log(queueItem.value)
      queueItem.left && queue.push(queueItem.left)
      queueItem.right && queue.push(queueItem.right)
    }
  }
  getMaxValue(): T | null {
    let currentNode: TreeNode<T> | null = this.root
    while (currentNode?.right) {
      currentNode = currentNode.right
    }

    return currentNode?.value ?? null
  }
  getMinValue(): T | null {
    let currentNode: TreeNode<T> | null = this.root
    while (currentNode?.left) {
      currentNode = currentNode?.left
    }

    return currentNode?.value ?? null
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
    return this.searchNode(value) !== null
  }
  remove(value: T): boolean {
    const removedNode = this.searchNode(value)
    if (!removedNode) return false

    // 1. 为根节点
    if (!removedNode.left && !removedNode.right) {
      if (removedNode.isLeft ) {
        removedNode.parent!.left = null
      } else {
        removedNode.parent!.right = null
      }
    }
    // 2. 只有一个子节点
    else if (
      removedNode.left !== null &&
      removedNode.right === null
    ) {
      if (removedNode.isLeft) {
        removedNode.parent!.left = removedNode.left
      } else {
        removedNode.parent!.right = removedNode.left
      }
    } else if (
      removedNode.right !== null &&
      removedNode.left === null
    ) {
      if (removedNode.isLeft) {
        removedNode.parent!.left = removedNode.right
      } else {
        removedNode.parent!.right = removedNode.right
      }
    }

    // 3. 有两个子节点
    else if(removedNode.left && removedNode.right) {
      const successorNode = this.getSuccessor(removedNode)

      if(successorNode.isLeft) successorNode!.parent!.left = null
      if(successorNode.isRight) successorNode!.parent!.right = null

      successorNode.right = removedNode.right

      if(removedNode.isLeft) {
        removedNode.parent!.left = successorNode
      }else {
        removedNode.parent!.left = successorNode
      }
    }

    return true
  }
  getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    let currentNode = delNode

    
    if(currentNode?.right) {
      currentNode = currentNode.right
    }

    while(currentNode?.left) {
      currentNode = currentNode.left
    }

    return currentNode
  }
}
