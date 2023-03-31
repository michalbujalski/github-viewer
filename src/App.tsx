import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchInput from './components/SearchInput'
import { searchRepository } from './api'
import { useDebounce } from './hooks/useDebounce'

function App() {
  const { debounce } = useDebounce(500)
  const handleQueryChange = (v: string) => {
    debounce(() => searchRepository(v))
  }
  return (
    <div className="App">
      <SearchInput onQueryChange={handleQueryChange} />
    </div>
  )
}

export default App
