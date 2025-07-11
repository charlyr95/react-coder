import { useState } from "react";
import { createMailing } from "../../service/firebase"


const MailingBanner = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const handleSubscribe = async () => {
        const email = document.getElementById("email-input").value;
        if (!validateEmailFormat(email)) {
            console.error("Invalid email format");
            setInvalidEmail(true);
            return;
        } else {
            setInvalidEmail(false);
        }
        try {
            const mailingId = await createMailing(email);
            console.log("Mailing created with ID: ", mailingId);
            setIsSubscribed(true);
        } catch (error) {
            console.error("Error creating mailing: ", error);
        }
    };

    const validateEmailFormat = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <section className="py-3 bg-warning text-center container-fluid d-flex justify-content-center align-content-center text-dark flex-column gap-0" style={{ fontSize: "0.8rem !important" }}>
            {!isSubscribed ? (
                <>
                    <h3 className="text-uppercase ">Unite al mailing list</h3>
                    <p className="">¡Enterate de todas las novedades y promociones!</p>
                    <div className="container col-12  col-md-4 input-group mb-3">
                        <input type="text" className={`form-control bg-white text-black border border-opacity-25 border-1 border-end-0 border-dark ${invalidEmail ? "is-invalid border-danger" : ""}`} placeholder="Dirección e-mail" aria-label="Dirección e-mail" id="email-input" />
                        <button className="btn btn-outline-dark z-1" type="button" id="button-mailing" onClick={handleSubscribe}>Suscribirse</button>
                        {invalidEmail && <div className="invalid-feedback">Por favor, ingresa un correo electrónico válido.</div>}
                    </div>
                </>
            ) : (
                <>
                    <div className="text-dark text-center w-100">
                        <p className="fs-4">¡Felicidades!</p>
                        <p className="">¡Comenzarás a recibir nuestras ofertas y promociones!</p>
                    </div>
                </>
            )}
        </section>
    )
}

export default MailingBanner;
