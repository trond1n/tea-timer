"use client";
import React from "react";

import styles from "./SpillList.module.css";
import SpillListItem from "../SpillListItem/SpillListItem";
const spills = [
  { name: "1 пролив", time: "00:15" },
  { name: "2 пролив", time: "00:15" },
  { name: "3 пролив", time: "00:15" },
];
const SpillList = () => {
  return (
    <div className={styles.container}>
      {spills.map((i, ix) => (
        <SpillListItem key={ix} name={i.name} time={i.time} />
      ))}
    </div>
  );
};

export default SpillList;
