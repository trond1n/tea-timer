"use client";
import React, { useState } from "react";
import BlockHeader from "../common/BlockHeader/BlockHeader";
import TimersListItem from "./TimersListItem/TimersListItem";
import styles from "./TimersList.module.css";
import LoginForm from "../common/LoginForm/LoginForm";
import Modal from "../common/Modal/Modal";
import RegistrationForm from "../common/RegistrationForm/RegistrationForm";
import AddForm from "../common/AddForm/AddForm";

const TimersList = () => {

  const [isShowAddModal, setIsShowAddModal] = useState<boolean>(false)

  return (
    <>
    <div className={styles.container}>
      <BlockHeader
        title="Таймеры"
        icons={[{ name: "add", onClick: () => setIsShowAddModal((prevState) => !prevState) }]}
        border
      />
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
        <TimersListItem
          name="Белый"
          time="3 мин"
          temperature="70-80°C"
          imageUrl="/images/tea.jpg"
          isActive={false}
        />
      </div>
    </div>
    {isShowAddModal && (
        <Modal onClose={()=> setIsShowAddModal(false)}>
          {<AddForm />}
        </Modal>
      )}
    </>
  );
};

export default TimersList;
