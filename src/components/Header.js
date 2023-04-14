import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <a href="/">
      <h1 className={styles.h1}>Bookstore CMS</h1>
    </a>
    <div className={styles.superNav}>
      <nav className={styles.nav}>
        <a href="/">Books</a>
        <a href="/categories">Categories</a>
      </nav>
      <div>
        Login
      </div>
    </div>
  </header>
);

export default Header;
