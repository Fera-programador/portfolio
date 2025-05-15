import styles from './Page404.module.css'

function Page404() {
    return (
        <div className={styles.containerAnimado}>
            <h2 className={styles.titulo2}>
                <strong className={styles.texto_vermelho}>Algo de Errado Não Está Certo</strong>
            </h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span> <br />
                <p><strong className={styles.texto_vermelho}>ERRO</strong></p> <br />
                <strong className={styles.texto_vermelho}>Página Não Localizada !</strong>
            </div>
        </div>
    );
}

export default Page404
