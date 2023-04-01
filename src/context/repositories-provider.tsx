import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Repository } from '../models'
import { searchRepository } from '../api'
import { useDebounce } from '../hooks/useDebounce'
import { cache } from '../helpers/cache'
import useQuery from '../hooks/useQuery'

interface RepositoryType {
  data: Repository[]
  isLoading: boolean
  error: string | null
  fetchRepositories: (query: string) => unknown
}

const RepositoryContext = createContext<RepositoryType>({
  data: [],
  isLoading: false,
  error: null,
  fetchRepositories: (_: string) => console.error('not initialized'),
})

export const useRepositories = () => useContext(RepositoryContext)

export const RepositoryProvider = ({ children }: { children: ReactNode }) => {
  const { updateQuery, query: queryParams } = useQuery()
  const cacheRef = useRef(cache<Repository[]>())
  const { debounce } = useDebounce(500)
  const [data, setData] = useState<Repository[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handle = async (query: string) => {
    try {
      const cached = cacheRef.current.get(query)
      if (cached) {
        setData(cached)
        return
      }
      setError(null)
      setIsLoading(true)
      const repos = await searchRepository(query)
      setData(repos)
      cacheRef.current.save(query, repos)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    const query = queryParams.get('q')
    if (!query) {
      return
    } else {
      handle(query)
    }
  }, [queryParams.get('q')])

  const fetchRepositories = (query: string) => {
    if (query === '') {
      return
    }
    debounce(async () => {
      updateQuery([['q', query]])
    })
  }

  const value = useMemo(() => {
    return { data, isLoading, error, fetchRepositories }
  }, [data, isLoading, error, fetchRepositories])

  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  )
}
function debounce(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.')
}
