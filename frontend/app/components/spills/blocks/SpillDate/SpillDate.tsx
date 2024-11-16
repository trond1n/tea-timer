"use client";
import React from "react";

import styles from "./SpillDate.module.css";

const SpillDate = () => {
  return (
    <div className={styles.container}>
      <p className={styles.date}>Сегодня,</p>&nbsp;
      <p className={styles.time}>08:00</p>
    </div>
  );
};

export default SpillDate;
