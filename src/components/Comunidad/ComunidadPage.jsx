const ComunidadPage = () => {
    return (
        <main className="bg-light min-vh-100">
            {/* Hero Section */}
            <section className="bg-body text-dark py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <div className="mt-5"></div>
                            <h1 className="display-4 fw-bold mb-3">Comunidad KinetiX Sports</h1>
                            <p className="lead mb-4">
                                Únete a nuestra vibrante comunidad deportiva. Comparte tus logros, inspira a otros y sé parte de algo más grande.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                <button className="btn btn-light border btn-lg px-4">
                                    <i className="bi bi-plus-circle me-2"></i>
                                    Compartir Post
                                </button>
                                <button className="btn btn-outline-light border text-body btn-lg px-4">
                                    <i className="bi bi-people me-2"></i>
                                    Unirse a Eventos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-4 bg-white shadow-sm">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-3 col-6 mb-3 mb-md-0">
                            <div className="d-flex flex-column align-items-center">
                                <i className="bi bi-people-fill text-primary fs-1 mb-2"></i>
                                <h4 className="fw-bold text-dark mb-1">2,543</h4>
                                <small className="text-muted">Miembros Activos</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 mb-3 mb-md-0">
                            <div className="d-flex flex-column align-items-center">
                                <i className="bi bi-chat-dots-fill text-success fs-1 mb-2"></i>
                                <h4 className="fw-bold text-dark mb-1">1,247</h4>
                                <small className="text-muted">Posts Compartidos</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="d-flex flex-column align-items-center">
                                <i className="bi bi-calendar-event-fill text-warning fs-1 mb-2"></i>
                                <h4 className="fw-bold text-dark mb-1">34</h4>
                                <small className="text-muted">Eventos Mensuales</small>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="d-flex flex-column align-items-center">
                                <i className="bi bi-trophy-fill text-danger fs-1 mb-2"></i>
                                <h4 className="fw-bold text-dark mb-1">156</h4>
                                <small className="text-muted">Logros Alcanzados</small>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="text-center mb-5">
                                <h2 className="display-6 fw-bold text-dark mb-3">Posteos de la Comunidad</h2>
                                <p className="text-muted">Descubre las últimas actividades y logros de nuestra comunidad deportiva</p>
                            </div>

                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm h-100 overflow-hidden">
                                        <div className="position-relative">
                                            <img src="/images/comunity/14117-728846.avif" className="card-img-top" alt="Jornada de entrenamiento en el parque" style={{ height: '250px', objectFit: 'cover' }} />
                                            <div className="position-absolute top-0 start-0 m-3">
                                                <span className="badge bg-success fs-6">Nuevo</span>
                                            </div>
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                    <i className="bi bi-person-fill text-white"></i>
                                                </div>
                                                <div>
                                                    <h5 className="card-title mb-0 fw-bold">María López</h5>
                                                    <small className="text-muted">Hace 2 horas</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-dark mb-3">¡Increíble jornada de entrenamiento en el parque! 💪🏃‍♀️</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex gap-3">
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-heart me-1"></i> 24
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-secondary">
                                                        <i className="bi bi-chat me-1"></i> 5
                                                    </button>
                                                </div>
                                                <button className="btn btn-sm btn-outline-success">
                                                    <i className="bi bi-share"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm h-100 overflow-hidden">
                                        <div className="position-relative">
                                            <img src="/images/comunity/18717-728271.jpg" className="card-img-top" alt="Carrera solidaria" style={{ height: '250px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-success rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                    <i className="bi bi-person-fill text-white"></i>
                                                </div>
                                                <div>
                                                    <h5 className="card-title mb-0 fw-bold">Carlos García</h5>
                                                    <small className="text-muted">Hace 5 horas</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-dark mb-3">Participé en la carrera solidaria, ¡gran experiencia!</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex gap-3">
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-heart me-1"></i> 18
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-secondary">
                                                        <i className="bi bi-chat me-1"></i> 3
                                                    </button>
                                                </div>
                                                <button className="btn btn-sm btn-outline-success">
                                                    <i className="bi bi-share"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm h-100 overflow-hidden">
                                        <div className="position-relative">
                                            <img src="/images/comunity/17167-714356.webp" className="card-img-top" alt="Yoga al amanecer" style={{ height: '250px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                    <i className="bi bi-person-fill text-white"></i>
                                                </div>
                                                <div>
                                                    <h5 className="card-title mb-0 fw-bold">Ana Fernández</h5>
                                                    <small className="text-muted">Hace 1 día</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-dark mb-3">Clase de yoga al amanecer, ¡super relajante! 🧘‍♀️🌅</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex gap-3">
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-heart me-1"></i> 31
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-secondary">
                                                        <i className="bi bi-chat me-1"></i> 7
                                                    </button>
                                                </div>
                                                <button className="btn btn-sm btn-outline-success">
                                                    <i className="bi bi-share"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm h-100 overflow-hidden">
                                        <div className="position-relative">
                                            <img src="/images/comunity/19812-738579.jpg" className="card-img-top" alt="Partido de fútbol" style={{ height: '250px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                                                    <i className="bi bi-person-fill text-white"></i>
                                                </div>
                                                <div>
                                                    <h5 className="card-title mb-0 fw-bold">Juan Pérez</h5>
                                                    <small className="text-muted">Hace 3 días</small>
                                                </div>
                                            </div>
                                            <p className="card-text text-dark mb-3">Gran partido de fútbol hoy. ¡Vamos equipo! ⚽🔥</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex gap-3">
                                                    <button className="btn btn-sm btn-outline-primary">
                                                        <i className="bi bi-heart me-1"></i> 15
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-secondary">
                                                        <i className="bi bi-chat me-1"></i> 2
                                                    </button>
                                                </div>
                                                <button className="btn btn-sm btn-outline-success">
                                                    <i className="bi bi-share"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Load More Section */}
                            <div className="text-center mt-5">
                                <button className="btn btn-primary btn-lg px-5">
                                    <i className="bi bi-arrow-down-circle me-2"></i>
                                    Cargar Más Posts
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ComunidadPage;
