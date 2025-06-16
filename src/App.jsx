// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemListContainer from "./components/ItemListContainer";
// import ErrorPage from "./components/ErrorPage";
// import Navbar from "./components/Navbar";
// import "./css/App.css";

import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer titulo='Todos los productos' />} />
        <Route path='/tienda' element={<ItemListContainer titulo='Todos los productos' />} />
        <Route path='/category/:categoryId' element={<ItemListContainer titulo='Productos por categoría' />} />
        <Route path='/gender/:gender' element={<ItemListContainer titulo='Productos por género' />} />
        <Route path='/product/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
