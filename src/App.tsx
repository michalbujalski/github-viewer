import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchInput from './components/SearchInput'

function App() {
  const handleQueryChange = (v: string) => {
    console.log(v)
  }
  return (
    <div className="App">
      <SearchInput onQueryChange={handleQueryChange} />
    </div>
  )
}

export default App
