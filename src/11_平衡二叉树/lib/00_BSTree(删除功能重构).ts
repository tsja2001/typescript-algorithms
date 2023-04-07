import { btPrint } from 'hy-algokit'

import { Node } from '../../00_types/Node'
export class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null
  get isLeft() {
    return this.parent?.left === this
  }
  get isRight() {
    return this.parent?.right === this
  }
}

export class BSTree<T> {
  root: TreeNode<T> | null = null

  /**
   * 由于之后会有其他类继承此类, 会创建不同的节点类型.
   * 因此将创建节点封装成一个方法, 继承的类可以重写次方法
   * 例如: AVLTree
   * 设计模式: 模板模式
   */
  protected createNode(value: T): TreeNode<T> {
    return new TreeNode(value)
  }

  /**
   * 检测树是否平衡
   */
  protected checkBalance(node: TreeNode<T>) {}

  insert(value: T) {
    const newNode = this.createNode(value)

    if (!this.root) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }

    // 检测树是否平衡
    this.checkBalance(newNode)
  }

  print() {
    btPrint(this.root)
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode
        node.left.parent = node
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (!node.right) {
        node.right = newNode
        node.right.parent = node
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }

  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node?.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }

  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left)
      console.log(node.value)
      this.inOrderTraverseNode(node.right)
    }
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }

  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left)
      this.postOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }

  // 层序遍历
  levelOrderTraverse() {
    if (!this.root) {
      return
    }

    const queue: TreeNode<T>[] = [this.root]
    while (queue.length) {
      const currentNode = queue.shift()!
      console.log(currentNode.value)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
    }
  }

  // 获取最大值
  getMaxValue(): T | null {
    let current = this.root

    while (current && current.right) {
      current = current.right
    }

    return current?.value ?? null
  }
  // 获取最小值
  getMinValue(): T | null {
    let current = this.root

    while (current && current.left) {
      current = current.left
    }

    return current?.value ?? null
  }

  // 搜索节点
  searchNode(value: T): TreeNode<T> | null {
    let parentNode: TreeNode<T> | null = null
    let currenNode: TreeNode<T> | null = this.root

    while (currenNode) {
      if (currenNode.value === value) {
        currenNode.parent = parentNode
        return currenNode
      } else if (value < currenNode.value) {
        parentNode = currenNode
        currenNode = currenNode.left
      } else if (value > currenNode.value) {
        parentNode = currenNode
        currenNode = currenNode.right
      }
    }

    return null
  }

  // 搜索
  search(value: T): boolean {
    return !!this.searchNode(value)?.value
  }

  // 删除
  remove(value: T): boolean {
    let currenNode: TreeNode<T> | null = this.searchNode(value)

    if (!currenNode) return false

    let replaceNode: TreeNode<T> | null = null

    // 1.删除节点是叶子结点
    if (currenNode.left === null && currenNode.right === null) {
      replaceNode = null
    }

    // 2.删除节点只有一个节点
    // 2.1删除节点只有一个左子节点
    else if (currenNode.left !== null && currenNode.right === null) {
      replaceNode = currenNode.left
    }
    // 2.2删除节点只有一个右子节点
    else if (currenNode.right !== null && currenNode.left === null) {
      replaceNode = currenNode.right
    }

    // 3.删除的节点有两个自节点
    // 思路: 将删除节点作为根, 找到这棵子树中的一个节点, 替换要删除节点的位置
    // 寻找替换节点原则: 去找前驱节点 或者 后继节点
    // 前驱节点: 比当前小一点点的子节点 => 当前节点左子树最大的节点
    // 后继节点: 比当前大一点点的子节点 => 当前节点右子树最小的节点
    else {
      const successor = this.getSuccessor(currenNode)
      replaceNode = successor
    }

    if (currenNode === this.root) {
      this.root = replaceNode
    } else if (currenNode.isLeft) {
      currenNode.parent!.left = replaceNode
    } else if (currenNode.isRight) {
      currenNode.parent!.right = replaceNode
    }

    return true
  }

  // 获取后继节点
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    let currentNode: TreeNode<T> | null = delNode.right
    let successor: TreeNode<T> | null = null

    while (currentNode) {
      successor = currentNode
      currentNode = currentNode.left
      if (currentNode) {
        currentNode.parent = successor
      }
    }

    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right
      successor!.right = delNode.right
    }

    // 删除节点的left, 赋值给后继节点的left
    successor!.left = delNode.left
    return successor!
  }
}

// const bstree = new BSTree<number>()

// bstree.insert(11)
// bstree.insert(7)
// bstree.insert(15)
// bstree.insert(5)
// bstree.insert(3)
// bstree.insert(9)
// bstree.insert(8)
// bstree.insert(10)
// bstree.insert(13)
// bstree.insert(12)
// bstree.insert(14)
// bstree.insert(20)
// bstree.insert(18)
// bstree.insert(25)
// bstree.insert(6)

// successor !== delNode.right情况
// bstree.insert(19)
// bstree.print()
// bstree.remove(15)
// bstree.print()

// successor === delNode.right情况
// bstree.remove(18)
// bstree.print()
// bstree.remove(15)
// bstree.print()
