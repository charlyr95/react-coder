const Loading = ({ mensaje = "Cargando..." }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">{mensaje}</span>
                </div>
                <p className="mt-3">{mensaje}</p>
            </div>
        </div>
    )
}

export default Loading
