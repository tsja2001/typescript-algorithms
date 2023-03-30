import { btPrint } from 'hy-algokit'

import { Node } from '../../00_types/Node'
class TreeNode<T> extends Node<T> {
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

  insert(value: T) {
    if (!this.root) {
      this.root = new TreeNode(value)
    } else {
      this.insertNode(value, this.root)
    }
  }

  print() {
    btPrint(this.root)
  }

  private insertNode(value: T, node: TreeNode<T>) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new TreeNode(value)
      } else {
        this.insertNode(value, node.left)
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(value)
      } else {
        this.insertNode(value, node.right)
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

    // 1.删除节点是叶子结点
    if (currenNode.left === null && currenNode.right === null) {
      if (currenNode === this.root) {
        this.root = null
      } else if (currenNode.isLeft) {
        currenNode.parent!.left = null
      } else if (currenNode.isRight) {
        currenNode.parent!.right = null
      }
    }

    // 2.删除节点只有一个节点
    // 2.1删除节点只有一个左子节点
    else if (currenNode.left !== null && currenNode.right === null) {
      // 2.1.1当前节点为根节点
      if (currenNode === this.root) {
        this.root = currenNode.left
      }
      // 2.1.2当前节点为父节点的左子节点
      else if (currenNode.isLeft) {
        currenNode.parent!.left = currenNode.left
      }
      // 2.1.3当前节点为父节点的右子节点
      else {
        currenNode.parent!.right = currenNode.left
      }
    }
    // 2.2删除节点只有一个右子节点
    else if (currenNode.right !== null && currenNode.left === null) {
      // 2.2.1当前节点为根节点
      if (currenNode === this.root) {
        this.root = currenNode.right
      }
      // 2.2.2当前节点为父节点的左子节点
      else if (currenNode.isLeft) {
        currenNode.parent!.left = currenNode.right
      }
      // 2.1.3当前节点为父节点的右子节点
      else if (currenNode.isRight) {
        currenNode.parent!.right = currenNode.right
      }
    }

    // 3.删除的节点有两个自节点
    // 思路: 将删除节点作为根, 找到这棵子树中的一个节点, 替换要删除节点的位置
    // 寻找替换节点原则: 去找前驱节点 或者 后继节点
    // 前驱节点: 比当前小一点点的子节点 => 当前节点左子树最大的节点
    // 后继节点: 比当前大一点点的子节点 => 当前节点右子树最小的节点
    else {
      const successor = this.getSuccessor(currenNode)
      // 3.1当前节点为根节点
      if(currenNode === this.root){
        this.root = successor
      }
      // 3.2当前节点为父节点的左子节点
      else if(currenNode.isLeft){
        currenNode.parent!.left = successor
      }
      // 3.3当前节点为父节点的右子节点
      else{
        currenNode.parent!.right = successor
      }
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
      if(currentNode){
        currentNode.parent = successor
      }
    }

    if(successor !== delNode.right){
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

// console.log(bstree.search(20))
// console.log(bstree.search(2))
// console.log(bstree.search(10))
// console.log(bstree.search(14))
// bstree.print()

// bstree.remove(3)
// bstree.remove(8)
// bstree.remove(12)
// bstree.remove(6)
// bstree.remove(10)
// bstree.remove(25)
// bstree.print()

// bstree.remove(20)
// bstree.print()
// bstree.remove(13)
// console.log('删除13后⬇️')
// bstree.print()

// bstree.print()
// bstree.remove(7)
// bstree.print()
// bstree.insert(19)
// bstree.print()
// bstree.remove(15)

// bstree.print()
