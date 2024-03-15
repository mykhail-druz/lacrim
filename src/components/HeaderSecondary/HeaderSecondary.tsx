import styles from "./HeaderSecondary.module.css";
import Logo from "@/icons/logo.svg";

type HeaderSecondaryProps = {
    activeNavBtn?: "about" | "products" | "upcoming",
};

export const HeaderSecondary: React.FC<HeaderSecondaryProps> = ({activeNavBtn}) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <a href="/" className={`${styles.btn}`}>Home</a>
        <a href="/products" className={`${activeNavBtn === "products" ? styles.btn__active : styles.btn}`}>Products</a>
        <a href="/about" className={`${activeNavBtn === "about" ? styles.btn__active : styles.btn}`}>Our Story</a>
        <a className={`${styles.btn}`}>Shop</a>
        <a href="/upcoming" className={`${activeNavBtn === "upcoming" ? styles.btn__active : styles.btn}`}>Upcoming</a>
      </nav>
    </header>
  );
};
