import { btPrint } from 'hy-algokit'
import { Node } from '../../00_types/Node'

class _TreeNode<T> extends Node<T> {
  left: _TreeNode<T> | null = null
  right: _TreeNode<T> | null = null
  parent: _TreeNode<T> | null = null
  ifLeft = () => this.parent?.left === this
  ifRight = () => this.parent?.right === this
}

export class _BSTree<T> {
  root: _TreeNode<T> | null = null

  insert(value: T) {
    if (this.root === null) {
      this.root = new _TreeNode(value)
    } else {
      this.insertNode(this.root, value)
    }
  }

  insertNode(node: _TreeNode<T>, value: T) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new _TreeNode(value)
      } else {
        this.insertNode(node.left, value)
      }
    } else {
      if (node.right === null) {
        node.right = new _TreeNode(value)
      } else {
        this.insertNode(node.right, value)
      }
    }
  }

  print() {
    btPrint(this.root)
  }

  preOrderTraverse() {
    if (this.root === null) return
    console.log('前序遍历')
    this.preOrderTraverseNode(this.root)
  }
  private preOrderTraverseNode(node: _TreeNode<T>) {
    console.log(node.value)
    if (node.left !== null) this.preOrderTraverseNode(node.left)
    if (node.right !== null) this.preOrderTraverseNode(node.right)
  }

  inOrderTraverse() {
    if (this.root === null) return
    console.log('中序遍历')
    this.inOrderTraverseNode(this.root)
  }
  private inOrderTraverseNode(node: _TreeNode<T>) {
    if (node.left !== null) this.preOrderTraverseNode(node.left)
    console.log(node.value)
    if (node.right !== null) this.preOrderTraverseNode(node.right)
  }

  postOrderTraverse() {
    if (this.root === null) return
    console.log('后序遍历')
    this.postOrderTraverseNode(this.root)
  }
  private postOrderTraverseNode(node: _TreeNode<T>) {
    if (node.left !== null) this.preOrderTraverseNode(node.left)
    if (node.right !== null) this.preOrderTraverseNode(node.right)
    console.log(node.value)
  }

  levelOrderTraverse() {
    if (this.root === null) return
    const queue: _TreeNode<T>[] = [this.root]

    while (queue.length) {
      const current = queue.shift()!
      console.log(current.value)

      if (current.left !== null) queue.push(current.left)
      if (current.right !== null) queue.push(current.right)
    }
  }

  getMaxValue() {
    if (this.root === null) return
    let current = this.root
    while (current.right !== null) {
      current = current.right
    }

    return current.value
  }

  getMinValue() {
    if (this.root === null) return
    let current = this.root
    while (current.left !== null) {
      current = current.left
    }

    return current.value
  }

  search(value: T): boolean {
    return !!this.searchNode(value)
  }

  searchNode(value: T): _TreeNode<T> | null {
    if (this.root === null) return null
    let current: _TreeNode<T> | null = this.root

    let parent: _TreeNode<T> | null = null

    while (current) {
      if (value === current.value) {
        current.parent = parent
        return current
      } else if (value < current.value) {
        parent = current
        current = current.left
      } else if (value > current.value) {
        parent = current
        current = current.right
      }
    }

    return null
  }

  remove(value: T): boolean {
    const delNode = this.searchNode(value)
    if (delNode === null) return false

    let replaceNode: _TreeNode<T> | null = null
    // 1. 叶子节点
    if (delNode.left === null && delNode.right === null) {
      replaceNode = null
    }

    // 2. 有1个子节点
    else if (delNode.left === null && delNode.right !== null) {
      replaceNode = delNode.right
    } else if (delNode.left !== null && delNode.right === null) {
      replaceNode = delNode.left
    }

    // 3. 有2个子节点
    else if (delNode.left !== null && delNode.right !== null) {
      const successNode = this.getSuccessor(delNode)

      if (delNode.right !== successNode) {
          successNode.parent!.left = successNode.right
          successNode.right = delNode.right
      }

      successNode.left = delNode.left

      replaceNode = successNode
    }

    if (delNode === this.root) {
      this.root = replaceNode
    } else if (delNode.ifRight()) {
      delNode.parent!.right = replaceNode
    } else if (delNode.ifLeft()) {
      delNode.parent!.left = replaceNode
    }

    return true
  }

  getSuccessor(delNode: _TreeNode<T>) {
    let currentNode: _TreeNode<T> = delNode.right!

    while (currentNode?.left) {
      const parent = currentNode
      currentNode = currentNode.left
      currentNode.parent = parent
    }

    return currentNode
  }
}

const _bstree = new _BSTree<number>()

_bstree.insert(5)
_bstree.insert(6)
_bstree.insert(5.5)
_bstree.insert(5.3)
_bstree.insert(5.8)
_bstree.insert(7)
_bstree.insert(8)
// _bstree.insert(6.5)
// _bstree.insert(6.4)
// _bstree.insert(6.7)
_bstree.insert(3)
_bstree.insert(2)
_bstree.insert(4)


_bstree.print()
_bstree.remove(6)
_bstree.print()
// console.log(_bstree.getSuccessor(_bstree.root?.right!).value)

// _bstree.preOrderTraverse()
// _bstree.inOrderTraverse()
// _bstree.postOrderTraverse()
// _bstree.levelOrderTraverse()
// console.log(_bstree.getMaxValue())
// console.log(_bstree.getMinValue())
// console.log(_bstree.search(5))
