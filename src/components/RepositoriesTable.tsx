import RepositoryTableRow from './RepositoryTableRow'
import { Repository } from '../models'
import TableRow from './TableRow'
import usePagination from '../hooks/usePagination'
import Pagination from './Pagination'
import useQuery from '../hooks/useQuery'
import { ReactNode, useMemo } from 'react'

const HeaderColumn = ({
  children,
  sortKey,
  setSortBy,
  slelected,
}: {
  children: ReactNode
  slelected: boolean
  sortKey: string
  setSortBy: (key: string) => unknown
}) => {
  return (
    <div className={`font-bold text-lg`}>
      <button
        className={`${slelected && 'underline'}`}
        onClick={() => setSortBy(sortKey)}
      >
        {children}
      </button>
    </div>
  )
}

const RepositoryTable = ({
  data,
  className,
}: {
  data: Repository[]
  className?: string
}) => {
  const { updateQuery, query } = useQuery()
  const sortKey = useMemo(() => {
    return query.get('sortBy')
  }, [query.get('sortBy')])

  const { page, totalPages, setPage, paginatedData, setItemsPerPage } =
    usePagination<Repository>(0, 7, data)
  const setSortBy = (key: string) => {
    updateQuery([['sortBy', key]])
  }
  return (
    <div className={`${className || ''} w-[600px]`}>
      <div className="mb-4">
        <span>Items per page</span>{' '}
        <select
          onChange={(e) => {
            setItemsPerPage(parseInt(e.target.value))
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>
      {data.length > 0 ? (
        <>
          <div>{sortKey}</div>
          <TableRow>
            <HeaderColumn
              sortKey={'name'}
              setSortBy={setSortBy}
              slelected={sortKey === 'name'}
            >
              Name
            </HeaderColumn>
            <HeaderColumn
              sortKey={'owner'}
              setSortBy={setSortBy}
              slelected={sortKey === 'owner'}
            >
              Owner
            </HeaderColumn>
            <HeaderColumn
              sortKey={'stars'}
              setSortBy={setSortBy}
              slelected={sortKey === 'stars'}
            >
              Stars
            </HeaderColumn>
            <HeaderColumn
              sortKey={'createdAt'}
              setSortBy={setSortBy}
              slelected={sortKey === 'createdAt'}
            >
              Created at
            </HeaderColumn>
          </TableRow>
          {paginatedData.map((repo) => {
            return <RepositoryTableRow key={repo.id} data={repo} />
          })}
        </>
      ) : (
        <div>No data found</div>
      )}
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  )
}

export default RepositoryTable
