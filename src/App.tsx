import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchInput from './components/SearchInput'
import { useRepositories } from './context/repositories-provider'

function App() {
  const { fetchRepositories } = useRepositories()

  const handleQueryChange = (query: string) => {
    fetchRepositories(query)
  }
  return (
    <div className="App">
      <SearchInput onQueryChange={handleQueryChange} />
    </div>
  )
}

export default App
