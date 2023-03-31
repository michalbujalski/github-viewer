export const cache = <T>() => {
  const map = new Map<string, T>()
  const save = (key: string, value: T) => {
    map.set(key, value)
  }

  const get = (key: string): T | null => {
    return map.get(key) || null
  }

  return { save, get }
}
