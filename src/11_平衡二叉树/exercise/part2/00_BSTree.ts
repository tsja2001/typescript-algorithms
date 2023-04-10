class BSTreeNode<T> {
  value: T | null = null
  left: BSTreeNode<T> | null = null
  right: BSTreeNode<T> | null = null
  parent: BSTreeNode<T> | null = null
  get isLeft() {
    return this.parent?.left === this
  }
  get isRight() {
    return this.parent?.right === this
  }

  constructor(value: T) {
    this.value = value
  }
}

export class BSTree<T> {
  root: BSTreeNode<T> | null = null

  // protected checkBalance(){}

  insert(value: T) {
    const newNode = new BSTreeNode<T>(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  protected insertNode(node: BSTreeNode<T>, newNode: BSTreeNode<T>) {
    if (newNode.value! < node.value!) {
      if (node.left) {
        this.insertNode(node.left, newNode)
      } else {
        node.left = newNode
        newNode.parent = node
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, newNode)
      } else {
        node.right = newNode
        newNode.parent = node
      }
    }
  }

  searchNode(value: T): BSTreeNode<T> | null {
    let currentNode = this.root

    while (currentNode) {
      if (value < currentNode.value!) {
        currentNode = currentNode.left
      } else if (value > currentNode.value!) {
        currentNode = currentNode.right
      } else if (value === currentNode.value!) {
        break
      }
    }

    return currentNode
  }

  remove(value: T): boolean {
    const removeNode = this.searchNode(value)
    console.log(value)

    let replaceNode: BSTreeNode<T> | null = null
    if (removeNode === null) return false

    if (removeNode.left === null && removeNode.right === null) {
      replaceNode = null
    } else if (
      removeNode.left === null &&
      removeNode.right !== null
    ) {
      replaceNode = removeNode.right
      replaceNode.parent = removeNode.parent
    } else if (
      removeNode.left !== null &&
      removeNode.right === null
    ) {
      replaceNode = removeNode.left
      replaceNode.parent = removeNode.parent
    } else {
      replaceNode = this.getSuccessor(removeNode)
    }

    if (removeNode.isLeft) {
      removeNode.parent!.left = replaceNode
    } else if (removeNode.isRight) {
      removeNode.parent!.right = replaceNode
    }

    return true
  }

  getSuccessor(delNode: BSTreeNode<T>): BSTreeNode<T> {
    let currentNode: BSTreeNode<T> | null = delNode.right!
    while (currentNode?.left) {
      currentNode = currentNode.left
    }

    delNode.value = currentNode.value
    // 后继节点 为 删除节点右子节点
    if (delNode.right === currentNode) {
      delNode.right = currentNode.right

      if (currentNode.right) {
        currentNode.right.parent = delNode
      }
    }
    // 后继节点 不是删除节点右子节点
    else {
      // 后继节点没有右子节点
      if (currentNode.right === null) {
        // currentNode = null
        currentNode.parent!.left = null
      }
      // 后继节点有右子节点
      else {
        currentNode.parent!.left = currentNode.right
        if (currentNode.right) {
          currentNode.right.parent = currentNode.parent
        }
      }
    }

    return delNode
  }
}
