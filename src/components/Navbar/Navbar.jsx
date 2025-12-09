import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import Box from '../NavbarHoverBox/Box';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [showMobileProducts, setShowMobileProducts] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const getLinkStyle = (path, hash = '') => {
        if (location.pathname === path && location.hash === hash) {
            return { color: '#00008B' };
        }
        return {};
    };

    return (
        <div className='navbar'>
            <div className='navbar__s1'>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img src="/Images/logo1.png" alt="Logo" />
                </Link>
            </div>

            <div className='navbar__s2'>
                <Link to="/" style={getLinkStyle('/')}>Home</Link>
                <Link to="/solutions" style={getLinkStyle('/', '#solutions')}>Solutions</Link>

                <div
                    className="navbar__dropdown"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >
                    <Link to="/products/Maintenance-Spare-Parts" style={getLinkStyle('/products')}>Products</Link>
                    <div
                        className="navbar__dropdown__content"
                        style={{ display: dropdown ? 'block' : 'none' }}
                    >
                        <Box onClose={() => setDropdown(false)} />
                    </div>
                </div>

                <Link to="/shops" style={{ display: 'none', ...getLinkStyle('/shops') }}>Shops</Link>
                <Link to="/resources" style={{ display: 'none', ...getLinkStyle('/resources') }}>Resources</Link>
                <Link to="/about" style={getLinkStyle('/about')}>About Us</Link>

                <Link to="/#contact" style={getLinkStyle('/', '#contact')}>Contact Us</Link>
            </div>

            <div className='navbar__s3'>
                <img src="/Images/menu.png" alt="Menu-Icon" onClick={() => setIsMenuOpen(true)} />
            </div>

            <div className={`responsive__side__bar ${isMenuOpen ? "open" : ""}`}>
                <p className='responsive__side__bar__close' onClick={() => setIsMenuOpen(false)}>X</p>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/solutions" onClick={handleLinkClick}>Solutions</Link>
                <div className="mobile-products-container">
                    <div className="mobile-products-header" onClick={() => setShowMobileProducts(!showMobileProducts)}>
                        <p style={{ cursor: 'pointer', margin: 0 }}>Products</p>
                        <span className={`mobile-products-toggle ${showMobileProducts ? 'open' : ''}`}>+</span>
                    </div>
                    <div className={`mobile-box-wrapper ${showMobileProducts ? 'open' : ''}`}>
                        <Box onClose={handleLinkClick} />
                    </div>
                </div>
                <Link to="/shops" onClick={handleLinkClick} style={{ display: 'none' }}>Shops</Link>
                <Link to="/resources" onClick={handleLinkClick} style={{ display: 'none' }}>Resources</Link>
                <Link to="/about" onClick={handleLinkClick}>About Us</Link>
                <Link to="/#contact" onClick={handleLinkClick}>Contact Us</Link>

            </div>
        </div>
    );
};

export default Navbar;