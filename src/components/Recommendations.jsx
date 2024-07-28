import React, { useEffect, useState } from "react";
import RecommendationCard from "./RecommendationsCard";
import styles from "./Recommendations.module.css";
import profile1 from "../assets/images/profile1.png";
import profile2 from "../assets/images/profile2.png";
import profile4 from "../assets/images/profile4.png";
import Rating from "../assets/images/Rating.png";
import NavbarRouting from "./NavbarRouting";
import { useLocation } from "react-router-dom";

// Map image file names to imported images
const profileImages = {
  "profile1.png": profile1,
  "profile2.png": profile2,
  "profile4.png": profile4,
};

const ratingImage = Rating; // Default rating image

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(2); // Center card 3 initially

  useEffect(() => {
    // Fetch the recommendations data from the backend
    fetch("http://localhost:3001/recommendations")
      .then((response) => response.json())
      .then((data) => setRecommendations(data))
      .catch((error) =>
        console.error("Error fetching recommendations data:", error)
      );
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const cardWidth = 340; // Width of each card
  const cardGap = 25; // Gap between cards
  const centerOffset = Math.floor(window.innerWidth / 2 - cardWidth / 2); // Center offset based on window width
  const transformValue = -currentIndex * (cardWidth + cardGap) + centerOffset;

  return (
    <>
      {location.pathname === "/recommendations" && <NavbarRouting />}
      <div className={styles.container} id="recommendations">
        <h1 className="text-center font-medium text-2xl mx-auto mb-5">
          Recommendations
        </h1>
        <p className="text-center text-gray-600 my-5 w-[600px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.carouselContainer}>
          <div
            className={styles.carousel}
            style={{ transform: `translateX(${transformValue}px)` }}
          >
            {recommendations.map((card) => (
              <RecommendationCard
                key={card.id}
                url={ratingImage} // Default rating image
                heading={card.heading}
                desc={card.desc}
                profileUrl={profileImages[card.profileUrl]} // Map profileUrl to imported image
                name={card.name}
                designation={card.designation}
                className={styles.card}
              />
            ))}
          </div>
          <div className={styles.dots}>
            {recommendations.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  currentIndex === index ? styles.active : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
