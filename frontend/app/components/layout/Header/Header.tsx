"use client"

import { useState } from "react";
import styles from "./Header.module.css";
import Modal from "../../common/Modal/Modal";
import LoginForm from "../../common/LoginForm/LoginForm";
import RegistrationForm from "../../common/RegistrationForm/RegistrationForm";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'login' | 'registration'>('login');

  const openModal = (type: 'login' | 'registration') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.headerLogo}>
          <h1 className={styles.headerLogoText}>Tea Timer</h1>
        </div>
        <div>
          <button
            className={styles.headerLink}
            onClick={() => openModal('registration')}
          >
            Зарегистрироваться
          </button>
          <button
            className={styles.headerLink}
            onClick={() => openModal('login')}
          >
            Войти
          </button>
        </div>
      </div>
    </header>
    {isModalOpen && (
        <Modal onClose={closeModal}>
          {modalType === 'login' ? <LoginForm /> : <RegistrationForm />}
        </Modal>
      )}
    </>
  );
};
export default Header;
