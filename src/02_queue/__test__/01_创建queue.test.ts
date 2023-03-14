import { Queue } from '../01_创建queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test('should enqueue an element', () => {
    queue.enQuque(1);
    expect(queue.size()).toBe(1);
  });

  test('should dequeue an element', () => {
    queue.enQuque(1);
    queue.enQuque(2);
    expect(queue.deQuque()).toBe(1);
    expect(queue.size()).toBe(1);
  });

  test('should return the first element without removing it', () => {
    queue.enQuque(1);
    queue.enQuque(2);
    expect(queue.pick()).toBe(1);
    expect(queue.size()).toBe(2);
  });

  test('should return true if queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('should return false if queue is not empty', () => {
    queue.enQuque(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('should return the size of the queue', () => {
    queue.enQuque(1);
    queue.enQuque(2);
    expect(queue.size()).toBe(2);
  });
});
