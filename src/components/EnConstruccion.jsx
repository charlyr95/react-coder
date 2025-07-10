import { Link } from 'react-router-dom';

const EnConstruccion = () => {
    return (
        <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="text-center p-5 rounded shadow bg-white">
                <i className="bi bi-cone-striped display-1 text-warning mb-3"></i>
                <h1 className="display-4 mt-4 mb-2 text-warning">¡En Construcción!</h1>
                <p className="lead mb-4">
                    Estamos trabajando para traerte algo increíble.<br />
                    ¡Vuelve pronto para descubrir las novedades!
                </p>
                <Link
                    className="btn btn-warning px-4 py-2 rounded-pill shadow-sm fw-bold"
                    to="/"
                >
                    Ir al inicio
                </Link>
            </div>
        </div>
    );
}

export default EnConstruccion;