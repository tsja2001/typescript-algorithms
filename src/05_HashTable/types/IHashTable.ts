export interface IHashTable<T> {
    storage: [string, T][][];
    length: number;
    count: number;

    hashFunc(key: string, max: number): number;
    isPrime(num: number): boolean;
    getNextPrime(num: number): number;
    put(key: string, value: T): void;
    get(key: string): T | undefined;
    delete(key: string): T | undefined;
    resize(newLength: number): void;
}
