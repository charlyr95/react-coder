const ErrorPage = () => {
return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center">
            <h1 className="display-1 fw-bold text-danger">401</h1>
            <h2 className="fw-bold mb-3">¡Ups! No tienes acceso</h2>
            <p className="text-secondary mb-4">
                Parece que no tienes permisos para ver esta página.<br />
                Si crees que esto es un error, por favor contacta al administrador o intenta iniciar sesión con otra cuenta.
            </p>
            <a href="/" className="btn btn-primary px-4 py-2 rounded-pill">
                Volver al inicio
            </a>
        </div>
    </div>
);
}

export default ErrorPage;
