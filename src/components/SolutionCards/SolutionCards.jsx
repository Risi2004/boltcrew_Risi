import React from "react";
import "./SolutionCards.css";
import { Link } from 'react-router-dom';

const SolutionCardsData = [
    {
        image: "/Images/solution.png",
        heading: "Design",
        desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        targetId: "solution-1"
    },
    {
        image: "/Images/solution.png",
        heading: "Design",
        desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        targetId: "solution-2"
    },
    {
        image: "/Images/solution.png",
        heading: "Design",
        desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        targetId: "solution-3"
    },
    {
        image: "/Images/solution.png",
        heading: "Design",
        desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
        targetId: "solution-4"
    }
];

const SolutionCard = ({ item }) => {
    const cardRef = React.useRef(null);
    const [style, setStyle] = React.useState({});

    const handleMouseMove = (e) => {
        if (window.innerWidth < 1024) return;
        if (!cardRef.current) return;

        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25; // Divide by factor to reduce sensitivity
        const y = (e.clientY - top - height / 2) / 25;

        // "Mouse goes up the upper part goes inside" -> y is negative at top. 
        // positive rotateX tips top back. So we want -y.
        // "Mouse goes right, right part goes inside" -> x is positive at right.
        // negative rotateY tips right back. So we want -x.

        const rotateX = -y * 2; // Multiplier for effect strength
        const rotateY = x * 2;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
            transition: 'transform 0.1s ease-out'
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s ease-out'
        });
    };

    return (
        <div
            className="solution__cards__s1"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={style}
        >
            <img src={item.image} alt={item.heading} className="solution__cards__image" />
            <h3 className="solution__cards__heading">{item.heading}</h3>
            <p className="solution__cards__desc">{item.desc}</p>
            <Link to={`/solutions#${item.targetId}`} className="solution__read__more">
                <button>Read More</button>
            </Link>
        </div>
    );
};

const SolutionCards = () => {
    return (
        <div className="solution__cards">
            {SolutionCardsData.map((item, index) => (
                <SolutionCard key={index} item={item} />
            ))}
        </div>
    );
}

export default SolutionCards;