import { useState, useMemo } from 'react'

export const calcPages = (perPage: number, total: number) => {
  return Math.ceil(total / perPage)
}

const usePagination = <T>(startPage: number, perPage: number, data: T[]) => {
  const [page, setPage] = useState(startPage)
  const [totalCount, setTotalCount] = useState(data.length)
  const [itemsPerPage, setItemsPerPage] = useState(perPage)
  const totalPages = useMemo(
    () => calcPages(itemsPerPage, data.length),
    [data.length, itemsPerPage]
  )

  const paginatedData = useMemo(() => {
    return data.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
  }, [data, page, itemsPerPage])

  return {
    page,
    totalPages,
    totalCount,
    setPage,
    setTotalCount,
    setItemsPerPage,
    itemsPerPage,
    paginatedData,
  }
}

export default usePagination
