import { BSTree, TreeNode } from './00_BSTree(删除功能重构)'
import { AVLTreeNode } from './01_AVLTreeNode'

class AVLTree<T> extends BSTree<T> {
  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild
    const current = pivot?.higherChild

    let resultNode: AVLTreeNode<T> | null = null
    if (pivot?.isLeft) {
      // LL
      if (current?.isLeft) {
        resultNode = root.rightRotation()
      }
      // LR
      else {
        pivot.leftRotation()
        resultNode = root.rightRotation()
      }
    } else {
      // RL
      if (current?.isLeft) {
        pivot?.rightRotation()
        resultNode = root.leftRotation()
      }
      // RR
      else {
        resultNode = root.leftRotation()
      }
    }

    // 判断返回的pivot是否为有父节点
    if (resultNode.parent === null) {
      this.root = resultNode
    }
  }

  protected createNode(value: T): AVLTreeNode<T> {
    return new AVLTreeNode<T>(value)
  }

  protected checkBalance(node: AVLTreeNode<T>): void {
    let currenNode = node.parent
    while (currenNode) {
      if (!currenNode.isBalanced) {
        this.rebalance(currenNode)
      }
      currenNode = currenNode.parent
    }
  }
}

const avlTree = new AVLTree<number>()

// avlTree.insert(8)
// avlTree.insert(10)
// avlTree.insert(11)

// avlTree.print()

for (let i = 0; i < 30; i++) {
  avlTree.insert(Math.floor(Math.random() * 100))
}

avlTree.print()
