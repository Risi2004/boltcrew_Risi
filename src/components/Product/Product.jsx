import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { products } from "../ProductPageComponent/ProductData";
import "./Product.css";

const Products = () => {
    const sliderRef = useRef(null);

    // Create a looped array of products for infinite scrolling
    const infiniteProducts = [...products, ...products];

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

    const handleScroll = () => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const scrollWidth = slider.scrollWidth;
            // The scrollable width is doubled. We reset when we reach the start of the second set.
            const singleSetWidth = scrollWidth / 2;

            if (slider.scrollLeft >= singleSetWidth) {
                // Instantly snap back to the beginning of the first set to simulate infinite loop
                slider.style.scrollBehavior = 'auto'; // Disable smooth scroll for instant jump
                slider.scrollLeft = slider.scrollLeft - singleSetWidth;
                slider.style.scrollBehavior = 'smooth'; // Re-enable smooth scroll
            }
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

            <div className="product__cards" ref={sliderRef} onScroll={handleScroll}>
                {infiniteProducts.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="product__cards__s1">
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