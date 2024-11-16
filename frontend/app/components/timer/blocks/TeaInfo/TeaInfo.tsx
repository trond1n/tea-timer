import React from "react";

import styles from "./TeaInfo.module.css";
import TeaInfoItem from "../TeaInfoItem/TeaInfoItem";
import TimerBlock from "../TimerBlock/TimerBlock";

const TeaInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list}>
      <TeaInfoItem icon={"temperature-high"} text={"70-80°C"}/>
      <div className={styles.separator}></div>
      <TeaInfoItem icon={"clock"} text={"1-3 мин"}/>
      <div className={styles.separator}></div>
      <TeaInfoItem icon={"repeat"} text={"2-3 раза"}/>
      </div>
     <TimerBlock/>
    </div>
  );
};

export default TeaInfo;
