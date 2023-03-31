import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchInput from './components/SearchInput'
import { useRepositories } from './context/repositories-provider'
import RepositoryTable from './components/RepositoriesTable'
import Loader from './components/Loader'

function App() {
  const { fetchRepositories, data, isLoading } = useRepositories()

  const handleQueryChange = (query: string) => {
    fetchRepositories(query)
  }
  return (
    <div className="App">
      <SearchInput onQueryChange={handleQueryChange} />
      <div className="flex justify-center pt-8">
        {isLoading ? <Loader /> : <RepositoryTable data={data} />}
      </div>
    </div>
  )
}

export default App
