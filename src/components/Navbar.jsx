import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark border-bottom border-secondary border-opacity-50"
      role="navigation"
      aria-label="Menú principal"
    >
      <div className="container-fluid align-items-center">
        <Link className="navbar-brand mx-md-5 mx-2 text-shadow-sm" to="/">
          Kineti<span className="text-warning">X Sports</span>
        </Link>
        <div className="order-lg-last d-flex gap-2 flex-nowrap ms-lg-3">
          <button
            className="btn btn-outline-light"
            type="button"
            aria-label="Cuenta de usuario"
          >
            <i className="bi bi-person"></i>
          </button>
          <Link to="/cart">
            <CartWidget />
          </Link>
          <button
            className="btn btn-outline-light d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Abrir menú de navegación"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarCollapse"
          style={{ fontSize: "0.9em" }}
        >
          <ul className="navbar-nav ms-xl-auto me-auto me-xl-auto mb-2 mb-lg-0 d-flex gap-xl-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item dropdown" data-bs-theme="dark">
              <Link
                className="nav-link dropdown-toggle"
                to="/tienda"
                role="button"
                id="dropdownTienda"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tienda
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownTienda"
                role="menu"
              >
                <li>
                  <Link className="dropdown-item" to="/explorar">
                    Explorar
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/hombre">
                    Hombre
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mujer">
                    Mujer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/nino">
                    Niño
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/disciplinas">
                    Disciplinas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/marcas">
                    Marcas
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/comunidad">
                Comunidad
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            <div
              className="d-lg-none position-absolute w-100 start-0 bg-transparent"
              style={{ top: "100%", height: "100vh" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
            ></div>
          </ul>
          <form className="d-flex" role="search">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
