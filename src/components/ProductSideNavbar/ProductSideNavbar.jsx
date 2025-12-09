import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductSideNavbar.css";

const ProductSideNavbar = () => {
    return (
        <div className="product__side__navbar">
            <NavLink
                to="/products/Maintenance-Spare-Parts"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Maintenance Spare Parts
            </NavLink>

            <NavLink
                to="/products/Electrical-&-Controls"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Electrical & Controls
            </NavLink>

            <NavLink
                to="/products/Personal-Safety"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Personal Safety
            </NavLink>

            <NavLink
                to="/products/EV-Chargers"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                EV Chargers
            </NavLink>

            <NavLink
                to="/products/Processing-Equipment"
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Processing Equipment
            </NavLink>
        </div>
    );
}

export default ProductSideNavbar;