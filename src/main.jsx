import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import './global.css'
import CartProvider from './context/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
)
