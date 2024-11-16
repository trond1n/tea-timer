'use client';
import React from "react";
import BlockHeader from "../common/BlockHeader/BlockHeader";
import TimersListItem from "./TimersListItem/TimersListItem";
import styles from "./TimersList.module.css";

const TimersList = () => {
  return (
    <div className={styles.container}>
      <BlockHeader title="Таймеры"  icons={[{ name: 'add', onClick: () => console.log('добавить') }]} border/>
      <div className={styles.list}>
        <TimersListItem
          name="Зелёный"
          time="3 мин"
          temperature="70-80°C"
          imageUrl="/images/tea.jpg"
          isActive={true}
        />
        <TimersListItem
          name="Чёрный"
          time="3 мин"
          temperature="70-80°C"
          imageUrl="/images/tea.jpg"
          isActive={false}
        />
        {/* Дополнительные элементы */}
        <TimersListItem
          name="Улун"
          time="3 мин"
          temperature="70-80°C"
          imageUrl="/images/tea.jpg"
          isActive={false}
        />
        <TimersListItem
          name="Пуэр"
          time="3 мин"
          temperature="70-80°C"
          imageUrl="/images/tea.jpg"
          isActive={false}
        />
        <TimersListItem
          name="Белый"
          time="3 мин"
          temperature="70-80°C"
          imageUrl="/images/tea.jpg"
          isActive={false}
        />
      </div>
    </div>
  );
};

export default TimersList;
