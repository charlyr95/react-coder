// import { useState } from 'react'
import "./css/App.css";
import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  return (
    <>
      <Navbar/>
      <h1 className="mt-5">Tienda Kinetix Sports</h1>
      <ProductsContainer title="Listado de productos" />
    </>
  );
}

export default App;
