import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import './global.css'
import CartProvider from './context/CartProvider.jsx'
import ProductsProvider from './context/ProductsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
  <ProductsProvider>
    <App />
    </ProductsProvider>
    </CartProvider>
    </BrowserRouter>
)
