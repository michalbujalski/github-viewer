import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RepositoryProvider } from './context/repositories-provider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RepositoryProvider>
      <RouterProvider router={router} />
    </RepositoryProvider>
  </React.StrictMode>
)
