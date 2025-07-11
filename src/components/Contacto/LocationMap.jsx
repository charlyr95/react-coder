const LocationMap = () => {
    return (
        <div className="container py-5">
            {/* Header Section */}
            <div className="text-center mb-5">
                <h2 className="display-6 fw-bold mb-3">Encuéntranos</h2>
                <p className="lead text-muted mb-0">Visítanos en nuestra tienda física en el corazón de Buenos Aires</p>
            </div>

            <div className="row g-4 align-items-stretch">
                {/* Map Section */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-lg h-100">
                        <div className="ratio ratio-16x9 h-100 w-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.5031281339507!2d-58.38327647059388!3d-34.60418254571152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf6a28f0f1%3A0x6bf5fad5cbba160a!2sAv.%209%20de%20Julio%20200!5e0!3m2!1sen!2sar!4v1752270848802!5m2!1sen!2sar"
                                title="Ubicación de Kinetix Sports"
                                allowFullScreen
                                className="w-100 h-100 rounded"
                                loading="lazy"
                                style={{ border: 'none', borderRadius: '0 0 0.375rem 0.375rem' }}
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Contact Info Section */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-lg h-100">
                        <div className="card-header bg-dark text-white text-center py-3 border-0">
                            <h5 className="mb-0 fw-semibold">
                                <i className="bi bi-info-circle me-2"></i>
                                Información de Contacto
                            </h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="d-flex flex-column gap-4">
                                {/* Address */}
                                <div className="d-flex align-items-start">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="bg-warning fs-5 d-flex align-items-center justify-content-center rounded-circle" style={{ width: 40, height: 40 }}>
                                            <i className="bi bi-geo-alt-fill"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Dirección</h6>
                                        <p className="text-muted mb-0">
                                            Av. 9 de Julio 200<br />
                                            C1043AAZ Buenos Aires<br />
                                            Argentina
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="bg-success fs-5 d-flex align-items-center justify-content-center rounded-circle" style={{ width: 40, height: 40 }}>
                                            <i className="bi bi-telephone-fill text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Teléfono</h6>
                                        <p className="text-muted mb-0">
                                            <a href="tel:+541145678900" className="text-decoration-none text-muted">
                                                +54 11 4567-8900
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="d-flex align-items-start">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="bg-primary fs-5 d-flex align-items-center justify-content-center rounded-circle" style={{ width: 40, height: 40 }}>
                                            <i className="bi bi-envelope-fill text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Email</h6>
                                        <p className="text-muted mb-0">
                                            <a href="mailto:tienda@kinetixsports.com.ar" className="text-decoration-none text-muted">
                                                tienda@kinetixsports.com.ar
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="d-flex align-items-start">
                                    <div className="flex-shrink-0 me-3">
                                        <div className="bg-info fs-5 d-flex align-items-center justify-content-center rounded-circle" style={{ width: 40, height: 40 }}>
                                            <i className="bi bi-clock-fill text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className="fw-semibold mb-1">Horarios</h6>
                                        <p className="text-muted mb-0">
                                            Lun - Vie: 9:00 - 19:00<br />
                                            Sáb: 9:00 - 15:00<br />
                                            Dom: Cerrado
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="card-footer bg-light-subtle border-top p-3">
                            <a
                                href="https://maps.google.com/?q=Buenos+Aires+Argentina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-dark w-100 fw-semibold"
                            >
                                <i className="bi bi-arrow-up-right-square me-2"></i>
                                Abrir en Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="row mt-5">
                <div className="col-12">
                    <div className="alert alert-info border-0 shadow-sm">
                        <div className="d-flex align-items-center">
                            <i className="bi bi-info-circle-fill me-3 fs-4"></i>
                            <div>
                                <h6 className="alert-heading mb-1">¿Cómo llegar?</h6>
                                <p className="mb-0">
                                    Estamos ubicados en pleno centro de Buenos Aires, cerca de las principales líneas de subte y colectivos.
                                    <strong> Estaciones de subte más cercanas:</strong> Carlos Pellegrini (Línea B) y 9 de Julio (Línea D).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationMap;
