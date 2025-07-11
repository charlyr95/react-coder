import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";

const NavigationBar = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="d-flex justify-content-between border-bottom border-secondary border-opacity-50"
      role="navigation"
      aria-label="Menú principal"
      style={{ fontSize: "0.9em" }}
    >
      <div className="container-fluid align-items-center">
        <Navbar.Brand as={Link} to="/" className="mx-md-5 mx-2 text-shadow-sm">
          Kineti<span className="text-warning">X Sports</span>
        </Navbar.Brand>
        <div className="order-lg-last d-flex gap-2 flex-nowrap ms-lg-3">
          {/* TODO: 3.2 Eliminar botón de login o implementar login con firebase */}
          <button
            className="btn btn-outline-light d-none"
            type="button"
            aria-label="Cuenta de usuario"
          >
            <i className="bi bi-person"></i>
          </button>
          <Link to="/cart">
            <CartWidget />
          </Link>
          <button className="btn btn-outline-light d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Abrir menú de navegación">
            <i className="bi bi-list"></i>
          </button>
        </div>
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-xl-auto me-auto me-xl-auto mb-2 mb-lg-0 d-flex gap-xl-4">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>
            <NavDropdown title="Tienda" id="dropdownTienda" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/tienda">
                Todos los productos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/gender/male">
                Hombre
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gender/female">
                Mujer
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/gender/child">
                Niño
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/category/calzado">
                Calzado
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/indumentaria">
                Indumentaria
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/comunidad">
              Comunidad
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros">
              Nosotros
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto" className="d-none">
              Contacto
            </Nav.Link>
            <div
              className="d-lg-none position-absolute w-100 start-0 bg-transparent vh-100 m-0 p-0 top-100"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="true"
            ></div>
          </Nav>
          {/* TODO: 3.1 Revisar implementación de búsqueda, recarga aplicación. Corregir o eliminar */}
          <form className="d-flex d-none" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar productos..."
              aria-label="Search"
            />
            <button className="btn btn-outline-light me-2" type="submit">
              Buscar
            </button>
          </form>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavigationBar;
