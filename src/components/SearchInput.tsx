import { useState } from 'react'

interface SearchInputProps {
  onQueryChange: (value: string) => unknown
  initValue: string | null
}

const SearchInput = ({ onQueryChange, initValue }: SearchInputProps) => {
  const [query, setQuery] = useState(initValue || '')
  const handleQueryUpdate = (value: string) => {
    onQueryChange(value)
    setQuery(value)
  }
  return (
    <input
      placeholder="Start typing repo name"
      value={query}
      className="p-2 rounded-md border-2 border-gray-400 w-96"
      onChange={(e) => handleQueryUpdate(e.target.value)}
    />
  )
}

export default SearchInput
