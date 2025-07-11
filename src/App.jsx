// library imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

// css
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/App.css'

// components
import NavigationBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import EnConstruccion from './components/EnConstruccion';
import ErrorPage from './components/ErrorPage';
import CartCheckout from './components/Cart/CartCheckout';

// context
import { CartProvider } from './context/CartContext';

// pages
import CartPage from './components/Cart/CartPage';
import LandingPage from './components/Landing/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/tienda' element={<ItemListContainer titulo='Todos los productos' />} />
          <Route path='/category/:category' element={<ItemListContainer titulo='Productos por categoría' />} />
          <Route path='/gender/:gender' element={<ItemListContainer titulo='Productos por género' />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartPage />} />
          {/* TODO: 1.1 Crear páginas para las otras secciones o modificar header */}
          <Route path='/comunidad' element={<EnConstruccion />} />
          <Route path='/nosotros' element={<EnConstruccion />} />
          <Route path='/contacto' element={<EnConstruccion />} />
          <Route path='/checkout' element={<CartCheckout />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App;
