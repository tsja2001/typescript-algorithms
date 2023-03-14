import { Queue } from './01_创建queue'
export const hotPotato = (arr: string[], num: number) => {
  const queue = new Queue<string>()

  for (const item of arr) {
    queue.enQuque(item)
  }

  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      const name = queue.deQuque()
      if (name) {
        queue.enQuque(name)
      }
    }
    queue.deQuque()
  }

  return queue.deQuque()
}
