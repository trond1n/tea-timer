import Link from "next/link";
import styles from "./LoginForm.module.css";

const LoginForm: React.FC = () => {
  return (
    <>
      <h2 className={styles.title}>Вход</h2>
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
        </div>
        <div className={styles.buttonsContainer}>
          <Link href="/forgot-password" className={styles.forgotPassword}>
            Забыли пароль?
          </Link>
          <button type="submit" className={styles.submitButton}>
            Войти
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
