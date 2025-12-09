import React, { useState, useEffect } from 'react';
import './HeaderSlider.css';

const HeaderSlider = () => {
    const images = [
        "./Images/header-slider/slide1.png",
        "./Images/header image.png",
        "./Images/header image.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="header">
            <div 
                className="header__s1"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Slide ${index}`} 
                        className="header__image" 
                    />
                ))}
            </div>
        </div>
    );
};

export default HeaderSlider;