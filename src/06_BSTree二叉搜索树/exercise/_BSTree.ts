import { btPrint } from 'hy-algokit'

import { Node } from '../../00_types/Node'
import { IBSTree } from '../type/IBSTree'
import { TreeNode } from 'src/11_平衡二叉树/lib/00_BSTree'

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  parent: TreeNode<T> | null = null

  get isLeft(){
    return this === this.parent?.left
  }
  get isRight(){
    return this === this.parent?.right
  }
}

export class _BSTree<T> implements IBSTree<T> {
  root: TreeNode<T> | null = null
  insert(value: T): void {
    throw new Error('Method not implemented.')
  }
  print(): void {
    throw new Error('Method not implemented.')
  }
  preOrderTraverse(): void {
    throw new Error('Method not implemented.')
  }
  inOrderTraverse(): void {
    throw new Error('Method not implemented.')
  }
  postOrderTraverse(): void {
    throw new Error('Method not implemented.')
  }
  levelOrderTraverse(): void {
    throw new Error('Method not implemented.')
  }
  getMaxValue(): T | null {
    throw new Error('Method not implemented.')
  }
  getMinValue(): T | null {
    throw new Error('Method not implemented.')
  }
  search(value: T): boolean {
    throw new Error('Method not implemented.')
  }
  
} 
