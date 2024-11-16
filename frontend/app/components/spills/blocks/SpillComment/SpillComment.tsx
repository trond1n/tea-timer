"use client";
import React from "react";

import styles from "./SpillComment.module.css";

const SpillComment = () => {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        placeholder="Ваш комментарий"
      ></textarea>
    </div>
  );
};

export default SpillComment;
