import Link from "next/link";
import styles from "./RegistrationForm.module.css";

const RegistrationForm: React.FC = () => {
  return (
    <>
      <h2 className={styles.title}>Регистрация</h2>
      <h2 className={styles.description}>
        Зарегистрируйтесь и сохраняйте историю своих заварок, отмечайте лучшие и
        пишите заметки.
      </h2>
      <form className={styles.form}>
        <div className={styles.inputsContainer}>
          <input
            type="email"
            placeholder="Введите почту"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Введите пароль"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Повторите пароль"
            className={styles.input}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <Link href="/forgot-password" className={styles.forgotPassword}>
            Уже есть аккаунт?
          </Link>
          <button type="submit" className={styles.submitButton}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
