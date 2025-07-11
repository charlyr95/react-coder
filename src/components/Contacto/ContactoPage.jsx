import ContactoForm from "./ContactoForm";
import LocationMap from "./LocationMap";

const ContactoPage = () => {
    return (
        <div>
            <div className="mt-4 ">&nbsp;</div>
            <div className="text-center mt-5">
                <h1 className="display-4 fw-bold mb-3">¡Contáctanos!</h1>
                <p className="lead text-muted">Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos.</p>
                <hr className="w-25 mx-auto border-primary border-3" />
            </div>
            <ContactoForm />
            <LocationMap />
        </div>
    );
};

export default ContactoPage;
