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
  const { page, totalPages, setPage, paginatedData } =
    usePagination<Repository>(0, 7, data)
  console.log(data.length)

  return (
    <div className={`${className || ''} w-[600px]`}>
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
