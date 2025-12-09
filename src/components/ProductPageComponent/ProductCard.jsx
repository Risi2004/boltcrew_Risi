import React from 'react';
import { Link } from "react-router-dom";
import "./ProductCard.css";


const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="card__image__container">
                <img
                    src={data.images.main}
                    alt={data.name}
                    className="card-main-img"
                />
            </div>

            <div className="card__details">
                <h3 className="card__title">{data.name}</h3>
                <p className="card__description">{data.description}</p>
                <Link to={`/products/${data.type}/${data.name.replace(/\s+/g, '-')}`} className="card__btn">View</Link>
            </div>
        </div>
    );
};

export default Card;