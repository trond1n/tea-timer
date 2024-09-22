"use client";
import React, { useState } from 'react';
import styles from './Registration.module.css'; 
const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordsMatch = password === confirmPassword && password !== '';

  return (
      <div className={styles.container}>
          <h1 className={styles.title}>Регистрация</h1>
          <form className={styles.form}>
              <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={styles.input}
                      placeholder="Введите email"
                  />
              </div>

              <div className={styles.formGroup}>
                  <label htmlFor="password" className={styles.label}>Пароль</label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className={styles.input}
                      placeholder="Введите пароль"
                  />
              </div>

              <div className={styles.formGroup}>
                  <label htmlFor="confirmPassword" className={styles.label}>Подтвердите пароль</label>
                  <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className={styles.input}
                      placeholder="Повторите пароль"
                  />
              </div>

              {!passwordsMatch && confirmPassword && (
                  <p className={styles.error}>Пароли не совпадают</p>
              )}

              {passwordsMatch && (
                  <button type="submit" className={styles.submitButton}>
                      Зарегистрироваться
                  </button>
              )}
          </form>
      </div>
  );
};

export default Registration;
