import { sortByKey } from './array'

describe('sorting', () => {
  test('should sort (asc) correctly array with numeric properties', () => {
    const arr = [
      {
        name: 'bc',
        stars: 111,
      },
      {
        name: 'ba',
        stars: 22,
      },
      {
        name: 'c',
        stars: 9,
      },
    ]
    const sorted = sortByKey(arr, 'stars', 'asc')
    const expected = [
      {
        name: 'c',
        stars: 9,
      },
      {
        name: 'ba',
        stars: 22,
      },
      {
        name: 'bc',
        stars: 111,
      },
    ]
    expect(sorted).toEqual(expected)
  })
  test('should sort (desc) correctly array with numeric properties', () => {
    const arr = [
      {
        name: 'c',
        stars: 9,
      },
      {
        name: 'bc',
        stars: 111,
      },
      {
        name: 'ba',
        stars: 22,
      },
    ]
    const sorted = sortByKey(arr, 'stars', 'desc')
    const expected = [
      {
        name: 'bc',
        stars: 111,
      },
      {
        name: 'ba',
        stars: 22,
      },
      {
        name: 'c',
        stars: 9,
      },
    ]
    expect(sorted).toEqual(expected)
  })
  test('should sort (asc) correctly array with string properties', () => {
    const arr = [
      {
        name: 'bc',
        stars: 111,
      },
      {
        name: 'ba',
        stars: 22,
      },
      {
        name: 'ca',
        stars: 9,
      },
      {
        name: 'az',
        stars: 9,
      },
    ]
    const sorted = sortByKey(arr, 'name', 'asc')
    const expected = [
      {
        name: 'ca',
        stars: 9,
      },
      {
        name: 'bc',
        stars: 111,
      },
      {
        name: 'ba',
        stars: 22,
      },
      {
        name: 'az',
        stars: 9,
      },
    ]
    expect(sorted).toEqual(expected)
  })
  test('should sort (desc) correctly array with string properties', () => {
    const arr = [
      {
        name: 'abc',
        stars: 111,
      },
      {
        name: 'xxx',
        stars: 9,
      },
      {
        name: 'abd',
        stars: 1,
      },
      {
        name: 'zzz',
        stars: 22,
      },
    ]
    const sorted = sortByKey(arr, 'name', 'desc')
    const expected = [
      {
        name: 'abc',
        stars: 111,
      },
      {
        name: 'abd',
        stars: 1,
      },
      {
        name: 'xxx',
        stars: 9,
      },
      {
        name: 'zzz',
        stars: 22,
      },
    ]
    expect(sorted).toEqual(expected)
  })
})
