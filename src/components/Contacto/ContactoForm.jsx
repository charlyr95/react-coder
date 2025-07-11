const ContactoForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes manejar el envío del formulario
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-xl-6">
                    <div className="card border-0 shadow-lg">
                        {/* Header Section */}
                        <div className="card-header bg-warning text-dark text-center py-4 border-0">
                            <div className="mb-3">
                                <i className="bi bi-envelope-heart fs-1"></i>
                            </div>
                            <p className="mb-0 opacity-75">Estamos aquí para ayudarte</p>
                        </div>

                        {/* Form Section */}
                        <div className="card-body p-5">
                            <div className="text-center mb-4">
                                <p className="text-muted mb-3">
                                    Envíanos un mensaje a través de nuestro formulario de contacto o escríbenos directamente a:
                                </p>
                                <a
                                    href="mailto:ecommerce@kinetixsports.com.ar"
                                    className="btn btn-outline-dark btn-sm"
                                >
                                    <i className="bi bi-envelope me-2"></i>
                                    ecommerce@kinetixsports.com.ar
                                </a>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="name" className="form-label fw-semibold">
                                            <i className="bi bi-person me-2 text-primary"></i>
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control form-control-lg"
                                            placeholder="Juan Pérez"
                                            style={{ fontSize: '1rem' }}
                                            required
                                            />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="phone" className="form-label fw-semibold">
                                            <i className="bi bi-telephone me-2 text-primary"></i>
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="form-control form-control-lg"
                                            style={{ fontSize: '1rem' }}
                                            placeholder="011-765-1284"
                                            />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label fw-semibold">
                                        <i className="bi bi-envelope me-2 text-primary"></i>
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control form-control-lg"
                                        placeholder="ejemplo@correo.com"
                                        style={{ fontSize: '1rem' }}
                                        required
                                        />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="subject" className="form-label fw-semibold">
                                        <i className="bi bi-tag me-2 text-primary"></i>
                                        Asunto
                                    </label>
                                    <select id="subject" name="subject" className="form-select form-select-lg" required style={{ fontSize: '1rem' }}>
                                        <option value="">Selecciona un asunto</option>
                                        <option value="consulta-producto">Consulta sobre producto</option>
                                        <option value="soporte-tecnico">Soporte técnico</option>
                                        <option value="devolucion">Devolución o cambio</option>
                                        <option value="sugerencia">Sugerencia</option>
                                        <option value="otro">Otro</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label fw-semibold">
                                        <i className="bi bi-chat-text me-2 text-primary"></i>
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-control"
                                        rows="5"
                                        placeholder="Escribe tu mensaje aquí. Cuéntanos cómo podemos ayudarte..."
                                        required
                                        style={{ resize: 'vertical' }}
                                    ></textarea>
                                </div>

                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-warning btn-lg py-3" >
                                        <i className="bi bi-send me-2"></i>
                                        Enviar Mensaje
                                    </button>
                                    <small className="text-muted text-center mt-2">
                                        Te responderemos en un plazo máximo de 24 horas
                                    </small>
                                </div>
                            </form>
                        </div>

                        {/* Footer Section */}
                        <div className="card-footer bg-light text-center py-4 border-0 d-none">
                            <div className="row text-center">
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="d-flex flex-column align-items-center">
                                        <i className="bi bi-clock text-primary fs-4 mb-2"></i>
                                        <small className="fw-semibold">Horario de Atención</small>
                                        <small className="text-muted">Lun - Vie: 9:00 - 18:00</small>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3 mb-md-0">
                                    <div className="d-flex flex-column align-items-center">
                                        <i className="bi bi-telephone text-primary fs-4 mb-2"></i>
                                        <small className="fw-semibold">Teléfono</small>
                                        <small className="text-muted">+54 11 4567-8900</small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-flex flex-column align-items-center">
                                        <i className="bi bi-geo-alt text-primary fs-4 mb-2"></i>
                                        <small className="fw-semibold">Ubicación</small>
                                        <small className="text-muted">Buenos Aires, Argentina</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactoForm

