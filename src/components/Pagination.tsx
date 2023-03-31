const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => unknown
}) => {
  return (
    <div className="flex">
      {Array.from(new Array(totalPages)).map((_, idx) => {
        return (
          <button
            key={`page-${idx + 1}`}
            className={`mx-2 hover:bg-gray-700 border-1 px-4 py-2${
              idx === currentPage &&
              'text-bold border-2 border-gray-500 rounded-md'
            }`}
            onClick={() => {
              onPageChange(idx)
            }}
          >
            {idx + 1}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination
