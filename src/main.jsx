import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { router } from './components/router/router.jsx'
import { RouterProvider } from 'react-router-dom'
import Context from './Contaxt/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Context >
       <RouterProvider router={router}></RouterProvider>
      <App />
    </Context>
  </React.StrictMode>
)
