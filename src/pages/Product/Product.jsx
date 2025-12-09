import React from "react";
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import ProductSideNavbar from "../../components/ProductSideNavbar/ProductSideNavbar";
import "./Product.css";
import ProductCategory from "../../components/ProductPageComponent/ProductCategory";
import IndividualProductPage from "../../components/IndividualProductPage/IndividualProductPage";

const Product = () => {
    const location = useLocation();
    const isIndividualPage = !!matchPath("/products/:category/:productName", location.pathname);

    return (
        <div className="product">
            {!isIndividualPage && <ProductSideNavbar />}

            <div className="product__display__area" style={isIndividualPage ? { width: '100%', paddingLeft: 0, marginRight: 0 } : {}}>
                <Routes>
                    <Route
                        path="Maintenance-Spare-Parts"
                        element={<ProductCategory title="Maintenance Spare Parts" categoryType="Maintenance-Spare-Parts" />}
                    />

                    <Route
                        path="Electrical-&-Controls"
                        element={<ProductCategory title="Electrical & Controls" categoryType="Electrical-&-Controls" />}
                    />

                    <Route
                        path="Personal-Safety"
                        element={<ProductCategory title="Personal Safety" categoryType="Personal-Safety" />}
                    />

                    <Route
                        path="EV-Chargers"
                        element={<ProductCategory title="EV Chargers" categoryType="EV-Chargers" />}
                    />

                    <Route
                        path="Processing-Equipment"
                        element={<ProductCategory title="Processing Equipment" categoryType="Processing-Equipment" />}
                    />
                    <Route path=":category/:productName" element={<IndividualProductPage />} />

                </Routes>
            </div>
        </div>
    );
}

export default Product;