import { useState } from "react"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Douglas Santos</span>
            </Link>

            {/* Ícone do menu sandwich */}
            <div className={styles.menuSandwich} onClick={alternarMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Menu de navegação */}
            <nav className={`${styles.nav} ${menuAberto ? styles.aberto : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contatos">Contato</Link>
            </nav>
        </header>
    );
}

export default Header
