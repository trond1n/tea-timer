import React from "react";
import styles from "./TeaInfoItem.module.css";

interface TeaInfoItemProps {
  icon: string;  
  text: string; 
}

const TeaInfoItem: React.FC<TeaInfoItemProps> = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      <i className={`fas fa-${icon} ${styles.icon}`}></i>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default TeaInfoItem;
