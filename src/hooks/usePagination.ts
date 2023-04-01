import { useState, useMemo, useEffect, useCallback } from 'react'
import useQuery from './useQuery'

export const calcPages = (perPage: number, total: number) => {
  return Math.ceil(total / perPage)
}

export const ITEMS_PER_PAGE = [5, 10, 15]

export const parseDefaultPage = (rawPage: string | null): number => {
  return (Number(rawPage) || 1) - 1
}

const usePagination = <T>(data: T[]) => {
  const { updateQuery, query } = useQuery()
  const [page, setPage] = useState(parseDefaultPage(query.get('page')))
  const [totalCount, setTotalCount] = useState(data.length)
  const [itemsPerPage, setItemsPerPage] = useState(
    Number(query.get('itemsPerPage')) || ITEMS_PER_PAGE[0]
  )

  const updateItemsPerPage = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage)
    updateQuery([['itemsPerPage', itemsPerPage.toString()]])
  }
  const totalPages = useMemo(
    () => calcPages(itemsPerPage, data.length),
    [data.length, itemsPerPage]
  )

  const updatePage = useCallback(
    (page: number) => {
      setPage(page)
      updateQuery([['page', (page + 1).toString()]])
    },
    [page]
  )

  const paginatedData = useMemo(() => {
    return data.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
  }, [data, page, itemsPerPage])

  return {
    page,
    totalPages,
    totalCount,
    updatePage,
    setTotalCount,
    updateItemsPerPage,
    itemsPerPage,
    paginatedData,
  }
}

export default usePagination
