import React from 'react'
import {Link} from 'react-router-dom'


const Item = ({ prod }) => {
    const {
        title,
        vendor,
        price,
        installments_quantity,
        main_image,
        hover_image,
        product_id,
    } = prod;

    return (
        <div className="col product-item z-1" data-aos="flip-right">
            <div className="product-card-container h-100">
                <div className="h-100 position-relative p-0">
                    <div className="card h-100 border-sm-bottom-0" style={{ borderRadius: 0 }}>
                        <div className="product-img border-bottom bg-white">
                            <div className="card-image-container position-relative overflow-hidden">
                                <img
                                    src={`../images/products/${main_image}`}
                                    className="card-img-top main-image"
                                    alt={title}
                                />
                                <img
                                    src={`../images/products/${hover_image}`}
                                    className="card-img-top hover-image position-absolute top-0 start-0 w-100 h-100"
                                    alt={title}
                                />
                            </div>
                        </div>
                        <div className="card-body bg-body-tertiary d-flex flex-column gap-1 py-2">
                            <div className="product-vendor text-muted">{vendor}</div>
                            <div className="product-title fw-bold">{title}</div>
                            <ul className="list-unstyled mt-auto mb-0">
                                <li>
                                    <span className="text-dark-emphasis fw-bold">
                                        ${price.toLocaleString("es-AR")}
                                    </span>
                                </li>
                                <li>
                                    {installments_quantity} cuotas de:{" "}
                                    <span className="text-dark-emphasis">
                                        $
                                        {Math.round(price / installments_quantity).toLocaleString(
                                            "es-AR"
                                        )}
                                    </span>
                                </li>
                                <li>
                                    <span className="text-dark-emphasis fw-bold">
                                        $
                                        {(Math.round(price * 0.0085) * 100).toLocaleString(
                                            "es-AR"
                                        )}
                                    </span>{" "}
                                    <small className="text-muted">con Transferencia</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="m-0 p-0 z-2">
                        <div className="buy-button bg-body-tertiary top-0 z-2">
                            <div className="p-4 pt-1 z-2">
                                <Link
                                    to={`./product/${product_id}`}
                                    className="btn btn-warning w-100 z-5"
                                    role="button"
                                >
                                    Ver producto
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item