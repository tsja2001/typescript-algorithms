import { btPrint } from 'hy-algokit'

import { Node } from '../../00_types/Node'
class TressNode<T> extends Node<T> {
  left: TressNode<T> | null = null
  right: TressNode<T> | null = null
}

export class BSTree<T> {
  root: TressNode<T> | null = null

  insert(value: T) {
    if (!this.root) {
      this.root = new TressNode(value)
    } else {
      this.insertNode(value, this.root)
    }
  }

  print() {
    btPrint(this.root)
  }

  private insertNode(value: T, node: TressNode<T>) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new TressNode(value)
      } else {
        this.insertNode(value, node.left)
      }
    } else {
      if (!node.right) {
        node.right = new TressNode(value)
      } else {
        this.insertNode(value, node.right)
      }
    }
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }

  private preOrderTraverseNode(node: TressNode<T> | null) {
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

  private inOrderTraverseNode(node: TressNode<T> | null) {
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

  private postOrderTraverseNode(node: TressNode<T> | null) {
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

    const queue: TressNode<T>[] = [this.root]
    while (queue.length) {
      const currentNode = queue.shift()!
      console.log(currentNode.value)
      if(currentNode.left) queue.push(currentNode.left)
      if(currentNode.right) queue.push(currentNode.right)
    }
  }  

  // 获取最大值
  getMaxValue() : T | null{
    let current = this.root

    while(current && current.right){
      current = current.right
    }

    return current?.value ?? null
  }
  // 获取最小值
  getMinValue() : T | null{
    let current = this.root

    while(current && current.left){
      current = current.left
    }

    return current?.value ?? null
  }

  
}

const bstree = new BSTree<number>()

bstree.insert(11)
bstree.insert(7)
bstree.insert(15)
bstree.insert(5)
bstree.insert(3)
bstree.insert(9)
bstree.insert(8)
bstree.insert(10)
bstree.insert(13)
bstree.insert(12)
bstree.insert(14)
bstree.insert(20)
bstree.insert(18)
bstree.insert(25)
bstree.insert(6)

bstree.print()

console.log(bstree.getMaxValue())
console.log(bstree.getMinValue())
