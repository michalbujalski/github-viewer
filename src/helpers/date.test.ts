import { formatDate } from './date'

describe('format date', () => {
  test('should parse correct format', () => {
    expect(formatDate('2022-04-27T09:37:18')).toBe('27.04.2022')
  })
  test('should ommit parsing when cannot parse date', () => {
    expect(formatDate('unparsable date')).toBe('Invalid Date')
  })
})
