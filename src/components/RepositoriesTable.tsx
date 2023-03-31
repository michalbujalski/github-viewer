import React from 'react'
import RepositoryTableRow from './RepositoryTableRow'
import { Repository } from '../models'
import TableRow from './TableRow'

const RepositoryTable = ({
  data,
  className,
}: {
  data: Repository[]
  className?: string
}) => {
  return (
    <div className={`${className || ''} w-full`}>
      {data.length > 0 ? (
        <>
          <TableRow>
            <div className="font-bold text-lg">Name</div>
            <div className="font-bold text-lg">Owner</div>
            <div className="font-bold text-lg">Stars</div>
            <div className="font-bold text-lg">Created at</div>
          </TableRow>
          {data.map((repo) => {
            return <RepositoryTableRow key={repo.id} data={repo} />
          })}
        </>
      ) : (
        <div>No data found</div>
      )}
    </div>
  )
}

export default RepositoryTable
