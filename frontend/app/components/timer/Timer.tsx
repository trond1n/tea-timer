"use client";
import React from "react";

import styles from "./Timer.module.css";
import BlockHeader from "../common/BlockHeader/BlockHeader";
import TeaInfo from "./blocks/TeaInfo/TeaInfo";

const Timer = () => {
  return (
    <div className={styles.container}>
      <BlockHeader
        title="Зеленый"
        icons={[
          { name: "pen-to-square", onClick: () => console.log("изменить") },
          { name: "circle-question", onClick: () => console.log("вопросики") },
        ]}
        border
      />
      <TeaInfo />
    </div>
  );
};

export default Timer;
