import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <ul className={styles.menuList}>
      <li>
        <a href="#" className={styles.menuItem}>
          Home
        </a>
      </li>
      <li>
        <a href="#" className={styles.menuItem}>
          About
        </a>
      </li>
      <li>
        <a href="#" className={styles.menuItem}>
          Contact
        </a>
      </li>
    </ul>
  </header>
);

export default Header;
