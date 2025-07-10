
const SocialMedia = () => {
    return (
        <div className="d-none d-md-block position-fixed top-50 end-0 mx-2 translate-middle-y z-3 " role="navigation" aria-label="Redes sociales">
            <div className="d-flex flex-column align-items-center bg-dark-subtle bg-opacity-75 py-2 px-2 rounded-pill shadow border">
                <a href="#" className="link-body-emphasis mb-2" aria-label="Facebook">
                    <i className="bi bi-facebook fs-4" aria-hidden="true"></i>
                </a>
                <a href="#" className="link-body-emphasis mb-2" aria-label="TikTok">
                    <i className="bi bi-tiktok fs-4" aria-hidden="true"></i>
                </a>
                <a href="#" className="link-body-emphasis mb-2" aria-label="Instagram">
                    <i className="bi bi-instagram fs-4" aria-hidden="true"></i>
                </a>
                <a href="#" className="link-body-emphasis" aria-label="WhatsApp">
                    <i className="bi bi-whatsapp fs-4" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;