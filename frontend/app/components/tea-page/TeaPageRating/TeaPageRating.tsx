import React from "react";
import styles from './TeaPageRating.module.css';

interface TeaPageRatingProps {
  rating: number; 
}

const TeaPageRating: React.FC<TeaPageRatingProps> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={styles.star}>
          {index < rating ? '★' : '☆'} 
        </span>
      ))}
    </div>
  );
};

export default TeaPageRating;
