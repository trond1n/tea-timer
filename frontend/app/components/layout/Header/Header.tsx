import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <ul className={styles.menuList}>
      <li>
        <a href="/tea-list" className={styles.menuItem}>
          Каталог
        </a>
      </li>
      <li>
        <a href="/login" className={styles.menuItem}>
          Логин
        </a>
      </li>
      <li>
        <a href="/about" className={styles.menuItem}>
          О проекте
        </a>
      </li>
    </ul>
    <div>
      <a href="/user" className={styles.menuItem}>
        Профиль
      </a>
      <button>Выход</button>
    </div>
  </header>
);

export default Header;
