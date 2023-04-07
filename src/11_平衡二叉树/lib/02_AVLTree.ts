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
      // LR
      else {
        resultNode = root.leftRotation()
      }
    }

    // 判断反悔的pivot是否为有父节点
    if (resultNode.parent === null) {
      this.root = resultNode
    }
  }

  protected createNode(value: T): AVLTreeNode<T> {
    return new AVLTreeNode<T>(value)
  }

	protected checkBalance(node: TreeNode<T>): void {
		console.log('node.value', node.value)
	}
}

const avlTree = new AVLTree<number>()

avlTree.insert(11)
avlTree.insert(22)
avlTree.insert(33)
avlTree.insert(10)
avlTree.insert(9)
avlTree.insert(7)
avlTree.insert(8)

avlTree.print()
