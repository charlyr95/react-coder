import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-warning">404</h1>
                <h2 className="fw-bold mb-3">¡Uy! No encontramos esta página</h2>
                <p className="text-secondary mb-4">
                    Parece que te perdiste.<br />
                    ¿Quieres volver al inicio y seguir navegando?
                </p>
                <Link
                    className="btn btn-primary px-4 py-2 rounded-pill"
                    to="/"
                >
                    Ir al inicio
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
