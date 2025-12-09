import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider.jsx';
import SolutionCards from '../../components/SolutionCards/SolutionCards.jsx';
import Products from '../../components/Product/Product.jsx';
import Brands from '../../components/Brands/Brands.jsx';
import Contact from '../../components/Contact/Contact.jsx';

const Home = () => {
    return (
        <div className="home">
            {/* Header Slider */}
            <div className='header'>
                <HeaderSlider />
            </div>

            {/* Company Introduction */}
            <div className='company__intro'>
                <div className='company__intro__s1'>
                    <img src="/Images/man-image.png" alt="Company-Intro" />
                    <Link to="/about">
                        <button>For More Information</button>
                    </Link>
                </div>
                <div className='company__intro__s2'>
                    <h1>Boltcrew Engineering</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, maxime? Minima nemo ipsam repudiandae, architecto porro maxime eligendi ex earum.</p>
                </div>
            </div>

            {/* Solutions */}
            <div className='solutions' id='solutions'>
                <h1>Solutions</h1>
                <SolutionCards />
            </div>

            {/* Products */}
            <div className='products__section'>
                <Products />
            </div>

            {/* Brands */}
            <div className='brands'>
                <h1>Brands</h1>
                <Brands />
            </div>

            {/* Contact */}
            <div className='Contact' id='contact'>
                <Contact />
            </div>
        </div>
    )
};

export default Home;