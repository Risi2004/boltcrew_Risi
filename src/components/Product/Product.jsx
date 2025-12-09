import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { products } from "../ProductPageComponent/ProductData";
import "./Product.css";

const Products = () => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= sliderRef.current.clientWidth;
        }
    };

    const slideRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += sliderRef.current.clientWidth;
        }
    };

    return (
        <div className='products'>
            <h1>Products</h1>

            <div className='products__s1'>
                <img
                    src="/Images/previous.png"
                    alt="previous"
                    className='previous__button'
                    onClick={slideLeft}
                />
                <img
                    src="/Images/next button.png"
                    alt="next"
                    className='next__button'
                    onClick={slideRight}
                />
            </div>

            <div className="product__cards" ref={sliderRef}>
                {products.map((item) => (
                    <div key={item.id} className="product__cards__s1">
                        <img src={item.images.main} alt={item.name} className="product__cards__image" />
                        <div className="product__card__details">
                            <h3 className="product__cards__name">{item.name}</h3>
                            <Link
                                to={`/products/${item.type}/${item.name.replace(/\s+/g, '-')}`}
                                className="product__cards__button"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <img src="/Images/product view.png" alt="View" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;