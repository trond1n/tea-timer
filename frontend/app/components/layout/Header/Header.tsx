import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
   <div className={styles.headerLogo}>
    <h1 className={styles.headerLogoText}>Tea Timer</h1>
   </div>
    <div>
      <a href="/user" className={styles.headerLink}>
        Зарегистрироваться
      </a>
      <a href="/user" className={styles.headerLink}>
        Войти
      </a>
     
    </div>
    </div>
  </header>
);

export default Header;
