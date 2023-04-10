import { BSTree } from './00_BSTree'
import { AVLTreeNode } from './01_AVLTreeNode'

export class AVLTree<T> extends BSTree<T> {
  root: AVLTreeNode<T> | null = null

  rebalance(node: AVLTreeNode<T>) {
		const pivot = node.higherChild
		const current = pivot?.higherChild

		let resultNode: AVLTreeNode<T> | null = null

		// if(pivot?.isLeft){
		// 	if(current?.isLeft){
		// 		resultNode = this.root.
		// 	}
		// }

		// if(resultNode.parent === null){
		// 	this.root = resultNode
		// }
  }
}
