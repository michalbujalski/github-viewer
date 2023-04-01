import RepositoryTableRow from './RepositoryTableRow'
import { Repository } from '../models'
import TableRow from './TableRow'
import usePagination, { ITEMS_PER_PAGE } from '../hooks/usePagination'
import Pagination from './Pagination'
import useQuery from '../hooks/useQuery'
import chevronIcon from '../assets/chevron-down.svg'
import { ReactNode, useMemo } from 'react'
import { SortOrder, sortByKey } from '../helpers/array'
import removeFiltersIcon from '../assets/filter-remove-icon.svg'

const HeaderColumn = ({
  children,
  sortKey,
  setSortBy,
  selected,
  order,
}: {
  children: ReactNode
  selected: boolean
  sortKey: string
  setSortBy: (key: string, order: SortOrder) => unknown
  order: SortOrder | undefined
}) => {
  return (
    <div className={`font-bold text-lg flex justify-center`}>
      <button
        className={`flex items-center px-2 ${selected && 'bg-neutral-700'}`}
        onClick={() => {
          if (selected) {
            const newOrder = order === 'asc' ? 'desc' : 'asc'
            setSortBy(sortKey, newOrder)
          } else {
            setSortBy(sortKey, order || 'asc')
          }
        }}
      >
        {children}

        {selected ? (
          <span>
            <img
              alt="icon"
              src={chevronIcon}
              className={`ml-4 ${order === 'asc' && 'rotate-180'}`}
            />
          </span>
        ) : null}
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
  const sortKey = useMemo<keyof Repository | null>(() => {
    return query.get('sortBy')
      ? (query.get('sortBy') as keyof Repository | null)
      : null
  }, [query.get('sortBy')])

  const order = useMemo<SortOrder | undefined>(() => {
    return query.get('order') as SortOrder
  }, [query.get('order')])

  const sortedData = useMemo(() => {
    if (!sortKey || !order || data.length === 0) {
      return data
    } else {
      return sortByKey(data, sortKey, order)
    }
  }, [data, sortKey, order])

  const {
    page,
    totalPages,
    updatePage,
    paginatedData,
    updateItemsPerPage,
    itemsPerPage,
  } = usePagination<Repository>(useMemo(() => sortedData, [sortedData]))

  const setSortBy = (key: string, order: SortOrder) => {
    updateQuery([
      ['sortBy', key],
      ['order', order],
    ])
  }
  const handleRemoveFilter = () => {
    updateQuery([], ['sortBy', 'order'])
  }

  return (
    <div className={`${className || ''} w-[600px]`}>
      <div className="mb-4 flex justify-end items-center">
        <span>Items per page</span>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            updateItemsPerPage(parseInt(e.target.value))
          }}
          className="mr-4"
        >
          {ITEMS_PER_PAGE.map((item) => {
            return (
              <option key={'item-' + item} value={item}>
                {item}
              </option>
            )
          })}
        </select>
        <button onClick={handleRemoveFilter}>
          <img src={removeFiltersIcon} alt="remove-filters" />
        </button>
      </div>
      {sortedData.length > 0 ? (
        <>
          <TableRow>
            <HeaderColumn
              sortKey={'name'}
              setSortBy={setSortBy}
              selected={sortKey === 'name'}
              order={order}
            >
              Name
            </HeaderColumn>
            <HeaderColumn
              sortKey={'owner'}
              setSortBy={setSortBy}
              selected={sortKey === 'owner'}
              order={order}
            >
              Owner
            </HeaderColumn>
            <HeaderColumn
              sortKey={'stars'}
              setSortBy={setSortBy}
              selected={sortKey === 'stars'}
              order={order}
            >
              Stars
            </HeaderColumn>
            <HeaderColumn
              sortKey={'createdAt'}
              setSortBy={setSortBy}
              selected={sortKey === 'createdAt'}
              order={order}
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
          onPageChange={updatePage}
        />
      </div>
    </div>
  )
}

export default RepositoryTable
