export const isPrime = (num: number): boolean => {
  // 获取平方根
  const square = Math.sqrt(num)
  for (let i = 2; i <= square; i++) {
    if (num % i === 0) return false
  }

  return true
}


console.log(isPrime(4))
