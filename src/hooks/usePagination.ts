import { useState, useMemo } from 'react'

export const calcPages = (perPage: number, total: number) => {
  return Math.ceil(total / perPage)
}

const usePagination = <T>(
  startPage: number,
  itemsPerPage: number,
  data: T[]
) => {
  const [page, setPage] = useState(startPage)
  const [totalCount, setTotalCount] = useState(data.length)

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
    itemsPerPage,
    paginatedData,
  }
}

export default usePagination
