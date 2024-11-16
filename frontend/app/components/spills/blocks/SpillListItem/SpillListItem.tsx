"use client";
import React from "react";

import styles from "./SpillListItem.module.css";

type SpillListItemProps = {
  name: string;
  time: string;
};

const SpillListItem: React.FC<SpillListItemProps> = ({ name, time }) => {
  return (
    <div className={styles.container}>
      <p className={styles.name}>{name}</p>
      <p className={styles.time}>{time}</p>
    </div>
  );
};

export default SpillListItem;
