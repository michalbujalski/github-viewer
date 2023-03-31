import RepositoryTableRow from './RepositoryTableRow'
import { Repository } from '../models'
import TableRow from './TableRow'
import usePagination from '../hooks/usePagination'
import Pagination from './Pagination'

const RepositoryTable = ({
  data,
  className,
}: {
  data: Repository[]
  className?: string
}) => {
  const { page, totalPages, setPage, paginatedData, setItemsPerPage } =
    usePagination<Repository>(0, 7, data)

  return (
    <div className={`${className || ''} w-[600px]`}>
      <div>
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
          <TableRow>
            <div className="font-bold text-lg">Name</div>
            <div className="font-bold text-lg">Owner</div>
            <div className="font-bold text-lg">Stars</div>
            <div className="font-bold text-lg">Created at</div>
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
