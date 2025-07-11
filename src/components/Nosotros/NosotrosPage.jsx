import AboutHero from "./AboutHero";
import AboutCard from "./AboutCard";

const NosotrosPage = () => {

    const Cards = [
        {
            title: "Nuestra misión",
            body: (
                <p className="text-justify">
                    Empoderar a las personas a vivir activamente y descubrir su máximo potencial, ofreciendo productos de
                    calidad, asesoramiento personalizado y un acompañamiento constante. Además, apoyamos a comunidades
                    necesitadas con recursos, equipamiento y programas deportivos que promueven la inclusión y el desarrollo.
                </p>
            )
        },
        {
            title: "Nuestra visión",
            body: (
                <p className="text-justify">
                    Ser líderes globales en soluciones deportivas, reconocidos por la calidad de nuestros productos y nuestro
                    compromiso con el bienestar y el impacto social positivo. Buscamos inspirar confianza, impulsar el
                    desarrollo personal y promover una sociedad más activa, equitativa y saludable.
                </p>
            )
        },
        {
            title: "Nuestros valores",
            body: (
                <ul className="list-unstyled">
                    <li className="mb-3">
                        <strong>Compromiso contigo: </strong> Tú eres el centro de todo lo que hacemos. Desde asesorarte en la
                        elección
                        del equipo perfecto hasta garantizar que tengas una experiencia única, estamos aquí para ayudarte a
                        alcanzar
                        tus objetivos.
                    </li>
                    <li className="mb-3">
                        <strong>Innovación constante: </strong> Nos mantenemos a la vanguardia, ofreciendo productos que combinan
                        tecnología de punta con diseño funcional. Sabemos que cada detalle cuenta.
                    </li>
                    <li className="mb-3">
                        <strong>Sostenibilidad: </strong> Cuidamos el entorno tanto como cuidamos de ti. Creemos que el deporte y
                        el
                        respeto por el medio ambiente pueden ir de la mano.
                    </li>
                    <li className="mb-3">
                        <strong>Apoyo comunitario: </strong> Trabajamos con comunidades necesitadas para ofrecer soporte,
                        equipamiento
                        deportivo y programas educativos que promuevan la igualdad de oportunidades y el acceso al deporte como
                        herramienta de transformación social.
                    </li>
                    <li className="mb-3">
                        <strong>Pasión por la comunidad: </strong> Más que una tienda, queremos ser un punto de encuentro para
                        quienes
                        comparten nuestra visión de que el deporte es una fuerza que conecta, inspira y transforma.
                    </li>
                    <li>
                        En KinetiX Sports,
                        <strong> tu éxito es nuestra victoria</strong>. Cada paso que das, cada meta que alcanzas, cada reto que
                        superas,
                        nos recuerda por qué hacemos lo que hacemos. Y cada comunidad a la que llegamos, nos inspira a seguir
                        impulsando
                        el cambio. Juntos, vamos más lejos.
                    </li>
                </ul>
            )
        }
    ]


    return (
        <main className="">
            <div className="mt-3">&nbsp;</div>

            <AboutHero />

            <section className="bg-white py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {/* Introduction Section */}
                            <div className="text-center mb-5">
                                <h2 className="display-5 fw-bold text-dark mb-4">Nuestra Historia</h2>
                                <div className="row justify-content-center">
                                    <div className="col-md-10">
                                        <div className="card border-0 shadow-sm bg-light">
                                            <div className="card-body p-5">
                                                <p className="lead text-muted mb-4 lh-lg">
                                                    En <strong className="text-primary">KinetiX Sports</strong> creemos que el deporte transforma vidas y comunidades. 
                                                    Nacimos como más que una tienda: una comunidad apasionada por la actividad física y la superación. 
                                                    Comenzamos en un pequeño garaje con el propósito de ofrecer experiencias inspiradoras, además de productos.
                                                </p>
                                                <p className="text-muted mb-0 lh-lg">
                                                    Desde el inicio, nos comprometimos a entender las necesidades de los deportistas y comunidades, 
                                                    siendo un aliado confiable tanto para principiantes como para atletas experimentados.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cards Section */}
                            <div className="row g-4">
                                {Cards.map((card, index) => (
                                    <div key={index} className="col-12">
                                        <AboutCard title={card.title} body={card.body} />
                                    </div>
                                ))}
                            </div>

                            {/* Call to Action Section */}
                            <div className="text-center mt-5 pt-4 d-none">
                                <div className="card bg-primary text-white border-0 shadow-lg">
                                    <div className="card-body p-5">
                                        <h3 className="fw-bold mb-3">¿Listo para comenzar tu aventura deportiva?</h3>
                                        <p className="lead mb-4">Descubre nuestra amplia selección de productos deportivos y únete a la comunidad KinetiX Sports</p>
                                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                                            <button className="btn btn-light btn-lg px-4 py-2">
                                                <i className="bi bi-shop me-2"></i>
                                                Explorar Tienda
                                            </button>
                                            <button className="btn btn-outline-light btn-lg px-4 py-2">
                                                <i className="bi bi-envelope me-2"></i>
                                                Contáctanos
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NosotrosPage;
