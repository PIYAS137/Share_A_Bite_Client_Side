import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import FirebaseAuthContext from './Context/FirebaseAuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseAuthContext>
      <RouterProvider router={routes} />
    </FirebaseAuthContext>
  </React.StrictMode>,
)
