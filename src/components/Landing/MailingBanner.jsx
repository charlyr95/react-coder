const MailingBanner = () => {
    return (
        <div className="bg-body-tertiary py-5">
            <h2 className="text-center text-white text-shadow">Suscríbete a nuestro boletín</h2>
            <p className="text-center text-white">Recibe las últimas noticias y ofertas especiales</p>
            <div className="text-center">
                <input type="email" placeholder="Ingresa tu correo electrónico" className="form-control w-50 mx-auto" />
                <button className="btn btn-primary mt-3">Suscribirse</button>
            </div>
        </div>
    )
}

export default MailingBanner;
