import { useState } from 'react';
import RecommendationCard from './RecommendationsCard';
import styles from './Recommendations.module.css';
import profile1 from '../assets/images/profile1.png';
import profile2 from '../assets/images/profile2.png';
import profile4 from '../assets/images/profile4.png';
import Rating from '../assets/images/Rating.png';

const RecommendationsCard = [
    {
        id: "rec1",
        ratingUrl: Rating,
        heading: "Amazing work!",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        profileUrl: profile1,
        name: "Tiana Philips",
        designation: "Photographer"
    },
    {
        id: "rec2",
        ratingUrl: Rating,
        heading: "Great Quality!",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        profileUrl: profile2,
        name: "James Gouse",
        designation: "Graphic Designer"
    },
    {
        id: "rec3",
        ratingUrl:Rating,
        heading: "Amazing work!",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        profileUrl: profile1,
        name: "Tiana Philips",
        designation: "Photographer"
    },
    {
        id: "rec4",
        ratingUrl: Rating,
        heading: "Great Quality!",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        profileUrl: profile4,
        name: "Talan Westervelt",
        designation: "Business man"
    },
    {
        id: "rec5",
        ratingUrl: Rating,
        heading: "Great Quality!",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
        profileUrl: profile2,
        name: "James Gouse",
        designation: "Graphic Designer"
    }
];
export default function Recommendations() {
    const [currentIndex, setCurrentIndex] = useState(2); // Center card 3 initially

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const cardWidth = 340; // Width of each card
    const cardGap = 25; // Gap between cards
    const centerOffset = Math.floor(window.innerWidth / 2 - cardWidth / 2); // Center offset based on window width
    const transformValue = -currentIndex * (cardWidth + cardGap) + centerOffset;

    return (
        <div className={styles.container}>
            <h1 className='text-center font-medium text-2xl mx-auto mb-5'>Recommendations</h1>
            <p className='text-center text-gray-600 my-5 w-[600px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className={styles.carouselContainer}>
                <div className={styles.carousel} style={{ transform: `translateX(${transformValue}px)` }}>
                    {RecommendationsCard.map((card) => (
                        <RecommendationCard
                            key={card.id}
                            url={card.ratingUrl}
                            heading={card.heading}
                            desc={card.desc}
                            profileUrl={card.profileUrl}
                            name={card.name}
                            designation={card.designation}
                            className={styles.card}
                        />
                    ))}
                </div>
                <div className={styles.dots}>
                    {RecommendationsCard.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}