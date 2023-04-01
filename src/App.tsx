import './App.css'
import SearchInput from './components/SearchInput'
import { useRepositories } from './context/repositories-provider'
import RepositoryTable from './components/RepositoriesTable'
import Loader from './components/Loader'
import useQuery from './hooks/useQuery'

function App() {
  const { query: queryParams } = useQuery()
  const { fetchRepositories, data, isLoading, error } = useRepositories()
  const handleQueryChange = (query: string) => {
    fetchRepositories(query)
  }

  return (
    <div className="App">
      <SearchInput
        onQueryChange={handleQueryChange}
        initValue={queryParams.get('q')}
      />
      <div className="flex justify-center pt-8">
        {isLoading ? (
          <Loader />
        ) : !error ? (
          <RepositoryTable data={data} />
        ) : (
          <div>There was an error while fetching results!</div>
        )}
      </div>
    </div>
  )
}

export default App
