import React from 'react'
import { Repository } from '../models'
import TableRow from './TableRow'

const RepositoryTableRow = ({ data }: { data: Repository }) => {
  return (
    <TableRow>
      <div>{data.name}</div>
      <div>{data.owner}</div>
      <div>{data.stars}</div>
      <div>{data.createdAt}</div>
    </TableRow>
  )
}

export default RepositoryTableRow
