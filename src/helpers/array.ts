export type SortOrder = 'asc' | 'desc'

export const sortByKey = <T>(
  arr: T[],
  key: keyof T,
  order: SortOrder = 'asc'
) => {
  const sortedArray = [...arr]

  sortedArray.sort((a, b) => {
    let aValue: string | number | T[keyof T] = a[key]
    let bValue: string | number | T[keyof T] = b[key]

    if (typeof aValue === 'string') {
      aValue = (aValue as string).toLowerCase()
      bValue = (bValue as string).toLowerCase()
      return order === 'desc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    } else {
      if (aValue < bValue) {
        return order === 'asc' ? -1 : 1
      }

      if (aValue > bValue) {
        return order === 'asc' ? 1 : -1
      }
    }

    return 0
  })

  return sortedArray
}
