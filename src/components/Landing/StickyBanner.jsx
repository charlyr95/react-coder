const StickyBanner = () => {
    return (
        <>
            <div className=" bg-warning text-black" style={{ lineHeight: 0, borderBottom: "1px solid var(--bs-border-color)" }}>
                <div className="pt-4 pb-4 text-center">
                    <h2 className="m-0 p0 fs-5 fw-normal text-uppercase " style={{ lineHeight: 0 }}><span className="d-none me-3">Kinetix Sports</span><span className="mb-3 mb-lg-0 ">tu tienda de deporte online</span></h2>
                </div>
                <div className="pt-1"></div>
            </div>

            <div className="container-fluid py-2 overflow-hidden bg-body" style={{ borderBottom: "1px solid var(--bs-border-color)" }}>
                <div className="d-flex align-items-center" id="moving-banner">
                    <div className="d-flex moving-banner align-items-center flex-nowrap">
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-cart me-2"></i>
                            <span>Ofertas especiales disponibles!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-credit-card me-2"></i>
                            <span>9 Cuotas sin interés!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-truck me-2"></i>
                            <span>Envío gratis a partir de $120.000!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-gift me-2"></i>
                            <span>15% de descuento con efectivo y transferencias!</span>
                        </div>
                    </div>
                    <div className="d-flex moving-banner align-items-center flex-nowrap">
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-cart me-2"></i>
                            <span>Ofertas especiales disponibles!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-credit-card me-2"></i>
                            <span>9 Cuotas sin interés!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-truck me-2"></i>
                            <span>Envío gratis a partir de $120.000!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-gift me-2"></i>
                            <span>15% de descuento con efectivo y transferencias!</span>
                        </div>
                    </div>
                    <div className="d-flex moving-banner align-items-center flex-nowrap">
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-cart me-2"></i>
                            <span>Ofertas especiales disponibles!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-credit-card me-2"></i>
                            <span>9 Cuotas sin interés!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-truck me-2"></i>
                            <span>Envío gratis a partir de $120.000!</span>
                        </div>
                        <div className="d-flex flex-nowrap me-5">
                            <i className="bi bi-gift me-2"></i>
                            <span>15% de descuento con efectivo y transferencias!</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StickyBanner;