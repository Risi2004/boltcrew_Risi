import React from 'react';
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className='footer'>
                <div className='footer__s1'>
                    <img src="/Images/logo1.png" alt="Logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Cum quod quam veniam, similique itaque distinctio et? <br /> Magnam eaque commodi magni aspernatur eius <br /> repellendus rerum enim accusantium quod. <br /> Assumenda, voluptatem ut!</p>
                </div>
                <div className='footer__s2' style={{ display: "none" }}>
                    <h3>Certifications</h3>
                    <div className='footer__s2__sub'>
                        <img src="/Images/sample solutions.png" alt="Certification" />
                        <img src="/Images/sample solutions.png" alt="Certification" />
                    </div>
                </div>
                <div className='footer__s3'>
                    <div className='footer__s3__sub1'>
                        <h3>Follow Us</h3>
                        <div className='footer__s3__sub2__sub'>
                            <img src="/Images/facebook.png" alt="Facebook" />
                            <img src="/Images/instagram.png" alt="Instagram" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer__end'>
                <p>&copy; {currentYear} Boltcrew Engineering. All rights reserved. </p>
                <h3><Link to="/private-policy">Private Policy</Link></h3>
            </div>
        </>

    );
};

export default Footer;
