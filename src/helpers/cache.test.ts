import { cache } from './cache'

describe('cache', () => {
  test('should save and return correct value', () => {
    const c = cache<number>()
    c.save('one', 112)
    expect(c.get('one')).toBe(112)
  })
  test('should return null if key not cached', () => {
    const c = cache<number>()
    expect(c.get('two')).toBe(null)
  })
})
