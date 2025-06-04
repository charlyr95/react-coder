// import { useState } from 'react'
import "./css/App.css";
import Navbar from "./components/Navbar";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  return (
    <>
      <Navbar/>
      <ProductsContainer className="mt-5" title="Listado de productos" />
    </>
  );
}

export default App;
