import { IHashTable } from './../types/IHashTable';
export class _HashTable<T> implements IHashTable<T> {
	storage: [string, T][][] = [];
	length: number = 0;
	count: number = 0;
	hashFunc(key: string, max: number): number {
		throw new Error('Method not implemented.');
	}
	isPrime(num: number): boolean {
		throw new Error('Method not implemented.');
	}
	getNextPrime(num: number): number {
		throw new Error('Method not implemented.');
	}
	put(key: string, value: T): void {
		throw new Error('Method not implemented.');
	}
	get(key: string): T | undefined {
		throw new Error('Method not implemented.');
	}
	delete(key: string): T | undefined {
		throw new Error('Method not implemented.');
	}
	resize(newLength: number): void {
		throw new Error('Method not implemented.');
	}

}
