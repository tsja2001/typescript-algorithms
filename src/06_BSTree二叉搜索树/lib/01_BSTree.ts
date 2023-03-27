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
