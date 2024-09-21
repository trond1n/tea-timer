import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Чайный таймер.
      </p>
      <ul className={styles.footerLinkContainer}>
      <li>
        <a href="/about" className={styles.footerLink}>
          О проекте
        </a>
      </li>
      <li>
        <a href="/contacts" className={styles.footerLink}>
          Контакты
        </a>
      </li>
      </ul>
    </footer>
  );
};

export default Footer;
