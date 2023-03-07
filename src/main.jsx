import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider 
      domain="dev-vpw0d534q128leti.us.auth0.com"
      clientId="QuMqk3bY7KdO5YJF3lpnLeANvFnAywPG"
      redirectUri={window.location.origin}>

    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>
  
)
