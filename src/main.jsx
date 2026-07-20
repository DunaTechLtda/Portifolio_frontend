import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css' // Mova seu CSS atual para a pasta src

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)