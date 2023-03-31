import React, { ReactNode } from 'react'

const TableRow = ({ children }: { children: ReactNode }) => {
  return <div className="grid grid-cols-4">{children}</div>
}

export default TableRow
