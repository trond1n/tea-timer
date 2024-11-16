import React from "react";
import Image from "next/image";
import styles from "./TimersListItem.module.css";

type TimersListItemProps = {
  name: string;
  time: string;
  temperature: string;
  imageUrl: string;
  isActive: boolean;
};

const TimersListItem: React.FC<TimersListItemProps> = ({
  name,
  time,
  temperature,
  imageUrl,
  isActive,
}) => {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={name}
          width={64}
          height={64}
          className={styles.image}
          objectFit="cover"
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.info}>
        <p className={styles.time}>{time}</p>
        <p className={styles.temperature}>{temperature}</p>
        </div>
      </div>
    </div>
  );
};

export default TimersListItem;
