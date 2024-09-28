import React from "react";
import styles from './TeaPageDescription.module.css';

interface TeaPageDescriptionProps {
  description: string; 
}

const TeaPageDescription: React.FC<TeaPageDescriptionProps> = ({ description }) => {
  return (
    <p className={styles.description}>{description}</p> 
  );
};

export default TeaPageDescription;
