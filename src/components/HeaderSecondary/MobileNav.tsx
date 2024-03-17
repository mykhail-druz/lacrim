import styles from "./HeaderSecondary.module.css";

export const MobileNav = () => {
  return (
    <div className={`${styles.mobile_nav__block} ${styles.open}`}>
      <nav className={styles.mobile__nav}>
        <a className={styles.mobile_nav__a} href="/">
          Home
        </a>
        <a className={styles.mobile_nav__a} href="/products">
          Products
        </a>
        <a className={styles.mobile_nav__a} href="/about">
          Our Story
        </a>
        <a className={styles.mobile_nav__a} href="/">
          Shop
        </a>
        <a className={styles.mobile_nav__a} href="/upcoming">
          Upcoming
        </a>
      </nav>
    </div>
  );
};
