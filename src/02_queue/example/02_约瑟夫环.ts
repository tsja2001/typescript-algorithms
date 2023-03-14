import { Queue } from '../lib/01_创建queue'
/**
 * https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/
 */

/**
 *
 * @param n 总人数
 * @param m 一次跳过多少人
 */
export const lastRemaining = (n: number, m: number) => {
  const queue = new Queue<number>()

  for (let i = 0; i < n; i++) {
    queue.enQuque(i)
  }

  while (queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      queue.enQuque(queue.deQuque()!)
    }

    queue.deQuque()
  }

	return queue.deQuque()!
}


const res = lastRemaining(5, 3)
console.log(res)
