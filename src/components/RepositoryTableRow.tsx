import { useMemo } from 'react'
import { Repository } from '../models'
import TableRow from './TableRow'
import { formatDate } from '../helpers/date'

const RepositoryTableRow = ({ data }: { data: Repository }) => {
  const formattedDate = useMemo(() => {
    return formatDate(data.createdAt)
  }, [data.createdAt])
  return (
    <TableRow>
      <div>{data.name}</div>
      <div>{data.owner}</div>
      <div>{data.stars}</div>
      <div>{formattedDate}</div>
    </TableRow>
  )
}

export default RepositoryTableRow
