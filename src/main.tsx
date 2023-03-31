import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RepositoryProvider } from './context/repositories-provider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RepositoryProvider>
      <App />
    </RepositoryProvider>
  </React.StrictMode>
)
