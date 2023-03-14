import { hotPotato } from '../example/01_击鼓传花'

describe('hotPotato', () => {
  test('当传入的数组中只有一个元素时，返回该元素', () => {
    expect(hotPotato(['alone'], 5)).toBe('alone')
  })

  test('返回最后剩余的元素', () => {
    expect(hotPotato(['why', 'james', 'kobe', 'curry'], 3)).toBe('why')
  })

  test('传入空数组时应该返回 undefined', () => {
    expect(hotPotato([], 3)).toBeUndefined()
  })
})
