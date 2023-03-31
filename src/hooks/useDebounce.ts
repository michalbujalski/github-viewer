import React, { useEffect, useRef } from 'react'

export const useDebounce = (delay: number) => {
  const timer = useRef<null | number>(null)
  const debounce = (callback: () => unknown) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      callback()
    }, delay)
  }
  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])
  return { debounce }
}
