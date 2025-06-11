import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import "./css/App.css";


// ItemListContainer con la promesa manejada
// ItemList
// ItemDetailContainer
// ItemDetail

function App() {

  // Configuración y definición de las rutas

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer title="Listado de productos" />} />
        <Route path="/explorar" element={<div>Página Explorar</div>} />
        <Route path="/hombre" element={<div>Página Hombre</div>} />
        <Route path="/mujer" element={<div>Página Mujer</div>} />
        <Route path="/nino" element={<div>Página Niño</div>} />
        <Route path="/disciplinas" element={<div>Página Disciplinas</div>} />
        <Route path="/marcas" element={<div>Página Marcas</div>} />
        <Route path="/comunidad" element={<div>Página Comunidad</div>} />
        <Route path="/nosotros" element={<div>Página Nosotros</div>} />
        <Route path="/contacto" element={<div>Página Contacto</div>} />
        <Route path="/cart" element={<div>Carrito de compras</div>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
