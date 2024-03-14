import styles from "./HeaderMain.module.css"
import Logo from "@/icons/logo.svg"

export const HeaderMain = () => {
    return ( <header className={styles.header}>
        <div>
            <Logo/>
        </div>
    </header> );
}