// TODO: Mailing con firebase, agregar serverTimestamp y geolocation con API
const MailingBanner = () => {
    return (
        <section className="py-3 bg-warning text-center container-fluid d-flex justify-content-center align-content-center text-dark flex-column gap-0" style={{ fontSize: "0.8rem !important" }}>
            <h3 className="text-uppercase ">Unite al mailing list</h3>
            <p className="">¡Enterate de todas las novedades y promociones!</p>
            <div className="container col-12  col-md-4 input-group mb-3">
                <input type="text " className="form-control bg-white text-black border border-opacity-25 border-1 border-end-0 border-dark " placeholder="Dirección e-mail" aria-label="Dirección e-mail" />
                <button className="btn btn-outline-dark z-1" type="button" id="button-mailing">Suscribirse</button>
            </div>
        </section>
    )
}

export default MailingBanner;
