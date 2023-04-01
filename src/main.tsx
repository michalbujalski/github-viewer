import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RepositoryProvider } from './context/repositories-provider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RepositoryProvider>
        <App />
      </RepositoryProvider>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
