const ComunidadPage = () => {
    return (
        <main className="flex-shrink-0 mt-5 container my-5">
            <div className="mt-5">&nbsp;</div>
            <section id="posteosComunidad">
                <h2 className="mb-4 text-center w-100">Posteos de la Comunidad</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="/images/comunity/14117-728846.avif" className="card-img-top" alt="Jornada de entrenamiento en el parque" />
                            <div className="card-body">
                                <h5 className="card-title">María López</h5>
                                <p className="card-text">¡Increíble jornada de entrenamiento en el parque! 💪🏃‍♀️</p>
                                <p className="text-muted">Hace 2 horas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/comunity/18717-728271.jpg" className="card-img-top" alt="Carrera solidaria" />
                            <div className="card-body">
                                <h5 className="card-title">Carlos García</h5>
                                <p className="card-text">Participé en la carrera solidaria, ¡gran experiencia!</p>
                                <p className="text-muted">Hace 5 horas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/comunity/17167-714356.webp" className="card-img-top" alt="Yoga al amanecer" />
                            <div className="card-body">
                                <h5 className="card-title">Ana Fernández</h5>
                                <p className="card-text">Clase de yoga al amanecer, ¡super relajante! 🧘‍♀️🌅</p>
                                <p className="text-muted">Hace 1 día</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="/images/comunity/19812-738579.jpg" className="card-img-top" alt="Partido de fútbol" />
                            <div className="card-body">
                                <h5 className="card-title">Juan Pérez</h5>
                                <p className="card-text">Gran partido de fútbol hoy. ¡Vamos equipo! ⚽🔥</p>
                                <p className="text-muted">Hace 3 días</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ComunidadPage;
