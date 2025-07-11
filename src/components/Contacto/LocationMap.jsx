const LocationMap = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Nuestra Ubicación</h2>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card border-0 shadow-lg">
                        <div className="card-body p-5">
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509949!2d144.9537353153165!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f5b5%3A0x5045675218ceed30!2sKinetix%20Sports!5e0!3m2!1sen!2sar!4v1616161616161!5m2!1sen!2sar"
                                    title="Ubicación de Kinetix Sports"
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
