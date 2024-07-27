import PropTypes from 'prop-types';
import styles from './Recommendations.module.css';

const RecommendationCard = ({ url, heading, desc, profileUrl, name, designation }) => {
    return (
        <div className={`${styles.recommendationCard}`}>
            <img className={styles.rating} src={url} alt="Rating" />
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.description}>{desc}</p>
            <div className={styles.profile}>
                <img className={styles.profileImage} src={profileUrl} alt={name} />
                <div className={styles.profileDetails}>
                    <h4 className={styles.name}>{name}</h4>
                    <p className={styles.designation}>{designation}</p>
                </div>
            </div>
        </div>
    );
};

RecommendationCard.propTypes = {
    url: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    profileUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired
};

export default RecommendationCard;
