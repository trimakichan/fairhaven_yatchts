import "./customerReviews.scss";
import { motion } from "framer-motion";
import { reviewsData } from "../../data/reviewsData";
import { FaStar } from "react-icons/fa";

import { getDelayedFadeInAnimSettings } from "../../animations/animationHooks";

const StarDisplay = ({ count }) => {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <FaStar key={index} aria-hidden="true" />
      ))}
    </div>
  );
};

const Review = ({ review: { review, index } }) => {
  return (
    <motion.article
      className="review"
      {...getDelayedFadeInAnimSettings(0.5, index)}
    >
      <div className="review__content">
        <div className="stars-container">
          <StarDisplay count={review.stars} />
        </div>
        <p>{review.review}</p>
      </div>

      <div className="review__customerInfo">
        <p className="customer-name">
          <span className="bold">{review.name}</span>
          <span aria-hidden="true"> | </span>
          <span>{review.status}</span>
        </p>
        {/* /real_ships57.webp */}
        {/* <img src={review.image} alt="A boat image" loading="lazy" /> */}
      </div>
    </motion.article>
  );
};

const CustomerReviews = () => {
  return (
    <section className="reviews" aria-label="Customer reviews">
      <header className="reviews__title">
        <h2>Satisfied Customers</h2>
        <p>Read what our clients have to say about us!</p>
      </header>

      <ul className="reviews__content">
        {reviewsData.map((review, index) => (
          <li key={index}>
            <Review review={{ review, index }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomerReviews;
