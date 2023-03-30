import { BSTree } from "../lib/01_BSTree"

class Person {
	name: string
	age: number
	constructor(name: string, age: number){
		this.name = name
		this.age = age
	}

	valueOf(){
		return this.age
	}
}

const person1 = new Person('aaa', 11)
const person2 = new Person('bbb', 22)
const person3 = new Person('ccc', 33)


const bsTree = new BSTree<Person>()

bsTree.insert(person2)
bsTree.insert(person1)
bsTree.insert(person3)

bsTree.print()
