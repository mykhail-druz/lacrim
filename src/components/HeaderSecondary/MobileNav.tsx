import styles from "./HeaderSecondary.module.css";

export const MobileNav = () => {
  return (
    <div className={`${styles.mobile_nav__block} ${styles.open}`}>
      <nav className={styles.mobile__nav}>
        <a className={styles.mobile_nav__a} href="/">
          Maison
        </a>
        <a className={styles.mobile_nav__a} href="/products">
          Produits
        </a>
        <a className={styles.mobile_nav__a} href="/about">
          Histoire
        </a>
        <a className={styles.mobile_nav__a} href="/">
          Boutique
        </a>
        <a className={styles.mobile_nav__a} href="/upcoming">
          Prochainement
        </a>
      </nav>
    </div>
  );
};
