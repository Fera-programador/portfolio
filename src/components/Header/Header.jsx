import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import styles from "./Header.module.css";

function Header() {
    const { lightMode, toggleLightMode } = useContext(ThemeContext);
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Douglas Santos</span>
            </Link>

            <div className={styles.menuSandwich} onClick={alternarMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <nav className={`${styles.nav} ${menuAberto ? styles.aberto : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contatos">Contato</Link>

                <div
                    className={`${styles.toggleContainer} ${lightMode ? styles.light : ''}`}
                    onClick={toggleLightMode}
                >
                    <div
                        className={styles.toggleButton}
                        style={{ backgroundImage: "url('/public/image.png')" }}
                    ></div>
                </div>
            </nav>
        </header>
    );
}

export default Header
