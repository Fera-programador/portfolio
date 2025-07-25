/* Pagina Home */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Ativa a animação após o componente montar
        setIsActive(true);
    }, []);

    return (
        <section className={styles.home}>
            <div className={`${styles.apresentacao} ${isActive ? styles.active : ''}`}>
                <p>
                    Olá, Sou <br />
                    <span>DOUGLAS SANTOS</span> <br />
                    DEV FULL STACK
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais sobre mim
                </Link>
            </div>
        </section>
    );
}

export default Home