import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href="/">
      <h1 className={styles.h1}>Bookstore CMS</h1>
    </a>
    <div className={styles.superNav}>
      <nav className={styles.nav}>
        <a href="/" className={styles.navLinks}>BOOKS</a>
        <a href="/categories" className={styles.navLinks}>CATEGORIES</a>
      </nav>
      <div>
        Login
      </div>
    </div>
  </header>
);

export default Header;
