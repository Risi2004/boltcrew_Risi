import React from "react";
import "./Brands.css";

const BrandsData = [
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
    { image: "/Images/brands.jpg" },
];

const Brands = () => {
    return (
        <div className="brands__slider">
            <div className="brands__track">
                {BrandsData.map((item, index) => (
                    <div key={`set1-${index}`} className="brands__slide">
                        <img src={item.image} alt={`Brand ${index + 1}`} className="brands__image" />
                    </div>
                ))}
                {BrandsData.map((item, index) => (
                    <div key={`set2-${index}`} className="brands__slide">
                        <img src={item.image} alt={`Brand ${index + 1}`} className="brands__image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brands;