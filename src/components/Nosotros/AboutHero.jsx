const AboutHero = () => {
    return (
        <section className="bg-light w-100 py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        {/* Hero Title */}
                        <div className="text-center mb-5">
                            <h1 className="display-4 fw-bold mb-3">Acerca de Kinetix Sports</h1>
                            <p className="lead text-muted">Descubre nuestra historia y nuestro compromiso con el deporte</p>
                            <hr className="w-25 mx-auto border-primary border-3" />
                        </div>

                        {/* Enhanced Carousel */}
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-xl-8">
                                <div className="card shadow-lg border-0 overflow-hidden">
                                    <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" aria-label="Slide 1"
                                                className="active bg-primary"></button>
                                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"
                                                className="bg-primary"></button>
                                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"
                                                className="bg-primary"></button>
                                            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"
                                                className="bg-primary"></button>
                                        </div>
                                        
                                        <div className="carousel-inner rounded">
                                            <div className="carousel-item active position-relative">
                                                <img className="d-block w-100" src="/images/store/117798110.jpg" alt="Tienda Kinetix Sports" 
                                                     style={{ height: '500px', objectFit: 'cover' }} />
                                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                                                    <h5 className="fw-bold">Nuestra Tienda Principal</h5>
                                                    <p>Un espacio moderno dedicado al deporte y la actividad física</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item position-relative">
                                                <img className="d-block w-100" src="/images/store/117625970.jpg" alt="Productos deportivos" 
                                                     style={{ height: '500px', objectFit: 'cover' }} />
                                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                                                    <h5 className="fw-bold">Productos de Calidad</h5>
                                                    <p>Las mejores marcas deportivas para tu rendimiento</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item position-relative">
                                                <img className="d-block w-100" src="/images/store/117963835.jpg" alt="Experiencia deportiva" 
                                                     style={{ height: '500px', objectFit: 'cover' }} />
                                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                                                    <h5 className="fw-bold">Experiencia Única</h5>
                                                    <p>Asesoramiento profesional para tus necesidades deportivas</p>
                                                </div>
                                            </div>
                                            <div className="carousel-item position-relative">
                                                <img className="d-block w-100" src="/images/store/118004779.jpg" alt="Comunidad deportiva" 
                                                     style={{ height: '500px', objectFit: 'cover' }} />
                                                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                                                    <h5 className="fw-bold">Comunidad Deportiva</h5>
                                                    <p>Más que una tienda, somos parte de tu pasión por el deporte</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                                            <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info Cards */}
                        <div className="row mt-5 g-4">
                            <div className="col-md-4">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body text-center p-4">
                                        <div className="mb-3">
                                            <i className="bi bi-award fs-1 text-primary"></i>
                                        </div>
                                        <h5 className="card-title fw-bold">Calidad Premium</h5>
                                        <p className="card-text text-muted">Productos de las mejores marcas deportivas del mundo</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body text-center p-4">
                                        <div className="mb-3">
                                            <i className="bi bi-people fs-1 text-primary"></i>
                                        </div>
                                        <h5 className="card-title fw-bold">Atención Personalizada</h5>
                                        <p className="card-text text-muted">Asesoramiento experto para encontrar lo que necesitas</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body text-center p-4">
                                        <div className="mb-3">
                                            <i className="bi bi-truck fs-1 text-primary"></i>
                                        </div>
                                        <h5 className="card-title fw-bold">Envío Rápido</h5>
                                        <p className="card-text text-muted">Recibe tus productos deportivos en tiempo récord</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;
