import { BSTree, TreeNode } from './00_BSTree'
import { AVLTreeNode } from './01_AVLTreeNode'

export class AVLTree<T> extends BSTree<T> {
  // root: AVLTreeNode<T> | null = null
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

  checkBalance(
    node: AVLTreeNode<T>,
    isAdd: boolean = true
  ): void {
    let currenNode = node.parent
    while (currenNode) {
      if (!currenNode.isBalanced) {
        this.rebalance(currenNode)
        // 完成旋转后,
        // 如果当前是添加操作, 则不需要继续去找父节点
        // 如果当前是删除操作, 要一直去判断父节点是否平衡
        if (isAdd) break
      }
      currenNode = currenNode.parent
    }
  }
}

const avlTree = new AVLTree<number>()

avlTree.insert(1)
avlTree.insert(2)
avlTree.insert(3)
avlTree.insert(4)
avlTree.insert(5)
avlTree.insert(15)
avlTree.insert(14)
avlTree.insert(13)
avlTree.insert(12)
avlTree.insert(11)
avlTree.insert(10)

avlTree.print()
avlTree.preOrderTraverse()

// avlTree.remove(11)
// avlTree.remove(10)
// console.log('remove(11) remove(10)')
// avlTree.print()
// avlTree.remove(5)
// console.log('remove(5)')
// avlTree.print()
// avlTree.remove(14)
// console.log('remove(14)')
// avlTree.print()

avlTree.remove(11)
avlTree.remove(15)
avlTree.print()
avlTree.insert(3.5)
console.log('insert(3.5)')
avlTree.print()
avlTree.insert(1.5)
console.log('insert(1.5)')
avlTree.print()
avlTree.insert(5.5)
console.log('insert(5.5)')
avlTree.print()

// for (let i = 0; i < 30; i++) {
//   avlTree.insert(Math.floor(Math.random() * 100))
// }

// avlTree.print()
