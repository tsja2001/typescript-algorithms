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
