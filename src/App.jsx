

import {  Route, Navigate, Routes } from 'react-router-dom'
import ProductsPage from './pages/productsPage'
import DetailsPage from './pages/DetailsPage';
 import CheckOut from './pages/CheckOut';
 import NotFoundPage from './pages/NotFoundPage';
import Layout from './layout/Layout';


function App() {
  return (
    <>
    <Layout>
    <Routes>
        <Route path='/' element={<Navigate to='/products'/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path="/products/:id" element={<DetailsPage/>}/>
       <Route path="/checkout" element={<CheckOut/>}/>
       <Route path="/*" element={<NotFoundPage/>}/>
    </Routes>
    </Layout>
    </>
  )
}

export default App

















