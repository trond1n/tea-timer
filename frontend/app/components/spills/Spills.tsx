"use client";
import React from "react";

import styles from "./Spills.module.css";
import BlockHeader from "../common/BlockHeader/BlockHeader";
import SpillDate from "./blocks/SpillDate/SpillDate";
import SpillList from "./blocks/SpillList/SpillList";
import SpillComment from "./blocks/SpillComment/SpillComment";

const Spills = () => {
  return (
    <div className={styles.container}>
      <BlockHeader title="Проливы" />
      <SpillDate/>
      <SpillList/>
      <SpillComment/>

    </div>
  );
};

export default Spills;
