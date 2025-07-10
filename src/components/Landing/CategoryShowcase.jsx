import { Link } from "react-router-dom";

const CategoryShowcase = () => {
  return (
    <section className="container-fluid bg-body pt-4">
      <h3 className="text-center py-3 text-uppercase">Novedades</h3>
      <div className="container pb-5">
        <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
          <div className="card text-bg-dark shadow">
            <img src="/images/category/shoes.webp" className="card-img" alt="" loading="lazy" />
            <div className="card-img-overlay text-center ">
              <div className="d-flex flex-column justify-content-end align-items-center h-100">
                <p className="p-2 rounded-2 card-text text-shadow-sm bg-black bg-opacity-25">Descubrí lo mejor para acompañarte
                  en cada paso</p>
                <Link className="btn btn-warning shadow-sm" role="button" to="/category/calzado">Calzados</Link>
              </div>
            </div>
          </div>
          <div className="card text-bg-dark shadow">
            <img src="/images/category/clothing.webp" className="card-img" alt="" loading="lazy" />
            <div className="card-img-overlay text-center ">
              <div className="d-flex flex-column justify-content-end align-items-center h-100">
                <p className="p-2 rounded-2 card-text text-shadow-sm bg-black bg-opacity-25">La ropa de mejor calidad a un solo
                  click de distancia.</p>
                <Link className="btn btn-warning shadow-sm" role="button" to="/category/indumentaria">Indumentaria</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;