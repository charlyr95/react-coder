import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import NavigationBar from './components/Navbar';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default App;
