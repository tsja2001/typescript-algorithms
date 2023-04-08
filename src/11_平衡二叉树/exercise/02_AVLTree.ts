import { BSTree } from './00_BSTree(删除功能重构)'
import { AVLTreeNode } from './01_AVLTreeNode'

export class AVLTree<T> extends BSTree<T> {
  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild
    const current = pivot!.higherChild

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
      // RR
      if (current?.isRight) {
        resultNode = root.leftRotation()
      }
      // RL
      else {
        pivot?.rightRotation()
        resultNode = root.leftRotation()
      }
    }

    if (resultNode.parent === null) {
      this.root = resultNode
    }
  }

  protected createNode(value: T): AVLTreeNode<T> {
    return new AVLTreeNode<T>(value)
  }

  protected checkBalance(
    node: AVLTreeNode<T>,
    isAdd: boolean = true
  ): void {
    let currentNode = node.parent

    while (currentNode) {
      if (!currentNode.isBalanced) {
        this.rebalance(currentNode)
				if (isAdd) break
      }

			currentNode = currentNode.parent
    }
  }
}
