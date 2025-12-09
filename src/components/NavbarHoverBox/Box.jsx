import React from "react";
import { Link } from "react-router-dom";
import "./Box.css";

const productsData = [
    { heading: "Maintenance Spare Parts", link: "/products/Maintenance-Spare-Parts" },
    { heading: "Electrical & Controls", link: "/products/Electrical-&-Controls" },
    { heading: "Personal Safety", link: "/products/Personal-Safety" },
    { heading: "EV Chargers", link: "/products/EV-Chargers" },
    { heading: "Processing Equipment", link: "/products/Processing-Equipment" }
];

// 1. Accept 'onClose' as a prop
const Box = ({ onClose }) => {
    return (
        <div className="navbar__hoverbox">
            {productsData.map((item, index) => (
                <div key={index} className="navbar__hoverbox__s1">
                    <Link to={item.link || "#"} onClick={onClose}>
                        {item.heading}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Box;