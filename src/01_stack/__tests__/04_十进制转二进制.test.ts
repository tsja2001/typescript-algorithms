import { decimalToBinary } from '../04_十进制转二进制'

describe('Stack', () => {
  it('get Binary', () => {
    expect(decimalToBinary(4)).toBe('100')
    expect(decimalToBinary(8)).toBe('1000')
    expect(decimalToBinary(10)).toBe('1010')
  })
})
