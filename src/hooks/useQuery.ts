import { useCallback, useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router'

const useQuery = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const query = useMemo(() => {
    return new URLSearchParams(location.search)
  }, [location])

  const updateQuery = useCallback(
    (
      updateParams: [key: string, value: string][],
      deleteParams: string[] = []
    ) => {
      updateParams.forEach(([key, value]) => {
        query.set(key, value)
      })
      deleteParams.forEach((key) => {
        query.delete(key)
      })
      navigate({
        search: query.toString(),
      })
    },
    [navigate, query.toString()]
  )

  return { query, updateQuery }
}

export default useQuery
