import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../ProductPageComponent/ProductData';
import './IndividualProductPage.css';

const IndividualProductPage = () => {
    const { productName } = useParams();
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const found = products.find(p => p.name.replace(/\s+/g, '-') === productName);
        if (found) {
            setProduct(found);
            setMainImage(found.images.main);
        }
    }, [productName]);

    if (!product) {
        return <div className="loading-state">Loading...</div>;
    }

    return (
        <div className="product-page-wrapper">
            <div className="product-content-grid">
                {/* Left Column: Images */}
                <div className="product-gallery">
                    <div className="main-image-container">
                        <img src={mainImage} alt={product.name} />
                    </div>
                    <div className="thumbnail-row">
                        <div
                            className={`thumb-item ${mainImage === product.images.main ? 'active' : ''}`}
                            onClick={() => setMainImage(product.images.main)}
                        >
                            <img src={product.images.main} alt="Main view" />
                        </div>
                        {product.images.thumbnails.slice(0, 2).map((thumb, index) => (
                            <div
                                key={index}
                                className={`thumb-item ${mainImage === thumb ? 'active' : ''}`}
                                onClick={() => setMainImage(thumb)}
                            >
                                <img src={thumb} alt={`View ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Details */}
                <div className="product-info-column">
                    <h1 className="product-main-title">{product.name}</h1>
                    <div className="product-price-tag">{product.price}</div>

                    <div className="product-description-block">
                        <p>{product.large_description}</p>
                    </div>

                    {product.certification && (
                        <div className="certification-link">
                            <span className="link-icon">🔗</span>
                            <span>Certification</span>
                        </div>
                    )}

                    <button
                        className="enquire-now-btn"
                        onClick={() => {
                            const message = `Hello, I would like to enquire about ${product.name}`;
                            window.open(`https://wa.me/94777800586?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                    >
                        Enquire Now
                    </button>

                </div>
            </div>

            {/* Related Products Section */}
            <div className="related-products-section">
                <div className="related-products-divider"></div>
                <div className="related-products-grid">
                    {products
                        .filter(p => p.type === product.type && p.id !== product.id)
                        .slice(0, 4)
                        .map(related => (
                            <div key={related.id} className="related-product-card">
                                <div className="related-card-img-container">
                                    <img src={related.images.main} alt={related.name} />
                                </div>
                                <div className="related-card-info">
                                    <h3 className="related-card-title">{related.name}</h3>
                                    <p className="related-card-details">{related.description}</p>
                                    <Link
                                        to={`/products/${related.type}/${related.name.replace(/\s+/g, '-')}`}
                                        className="related-card-btn"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        View
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default IndividualProductPage;
