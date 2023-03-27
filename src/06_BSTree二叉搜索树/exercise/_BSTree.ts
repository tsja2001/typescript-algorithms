import { btPrint } from 'hy-algokit'
import { Node } from '../../00_types/Node'

class _TreeNode<T> extends Node<T> {
  left: _TreeNode<T> | null = null
  right: _TreeNode<T> | null = null
}

export class _BSTree<T> {
  private root: _TreeNode<T> | null = null

  insert(value: T) {
    if (!this.root) {
      this.root = new _TreeNode(value)
    } else {
      this.insertNode(value, this.root)
    }
  }

  insertNode(value: T, node: _TreeNode<T>) {
    if (value > node.value) {
      if (node.right) {
        this.insertNode(value, node.right)
      } else {
        node.right = new _TreeNode(value)
      }
    } else {
      if (node.left) {
        this.insertNode(value, node.left)
      } else {
        node.left = new _TreeNode(value)
      }
    }
  }

  print() {
    btPrint(this.root)
  }
}

const _bstree = new _BSTree<number>()

_bstree.insert(2)
_bstree.insert(1)
_bstree.insert(3)


_bstree.print()
