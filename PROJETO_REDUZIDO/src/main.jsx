import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importa o CSS global, se houver
import './index.css'

// Renderiza o componente principal (App) no elemento <div id="root"> do index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
