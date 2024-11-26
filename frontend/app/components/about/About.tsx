"use client";
import React from "react";
import Image from "next/image";
import styles from "./About.module.css";

interface AboutProps {
  onClose: () => void;
}
const About = ({ onClose }: AboutProps) => {
  return (
    <div className={styles.container}>
      <div onClick={onClose}>
        <i className={`${styles.icon} fa-solid fa-chevron-left`}></i>
      </div>
      <p className={styles.text}>
        Зелёные чаи требуют бережного обращения с водой. Слишком горячая вода
        может сделать чай горьким.
      </p>
      <Image
        src="/images/tea.png"
        alt="tea"
        width={362}
        height={255}
        className={styles.image}
      />
      <p className={styles.text}>
        Зелёные чаи требуют бережного обращения с водой. Слишком горячая вода
        может сделать чай горьким. Обычно первые проливы делают короткими (около
        30 секунд), затем можно увеличивать время настаивания.
      </p>
      <p className={styles.text}>
        Зелёные чаи требуют бережного обращения с водой. Слишком горячая вода
        может сделать чай горьким. Обычно первые проливы делают короткими (около
        30 секунд), затем можно увеличивать время настаивания.
      </p>
    </div>
  );
};

export default About;
