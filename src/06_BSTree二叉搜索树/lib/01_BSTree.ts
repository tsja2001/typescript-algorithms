import { Node } from './../../00_types/INode'
class TressNode<T> extends Node<T> {
  left: TressNode<T> | null = null
  right: TressNode<T> | null = null
}

class BSTree<T>{
	private root: TressNode<T> | null = null
}
