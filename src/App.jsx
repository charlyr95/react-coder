// library imports
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

// css
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css'

// components
import NavigationBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ErrorPage from './components/ErrorPage';

// context
import { CartProvider } from './context/CartContext';

// pages
import Cart from './pages/Cart';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<ItemListContainer titulo='Todos los productos' />} />
          <Route path='/tienda' element={<ItemListContainer titulo='Todos los productos' />} />
          <Route path='/category/:category' element={<ItemListContainer titulo='Productos por categoría' />} />
          <Route path='/gender/:gender' element={<ItemListContainer titulo='Productos por género' />} />
          <Route path='/product/:product_id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App;
