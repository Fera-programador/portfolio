/* Pagina Sobre */

import styles from './Sobre.module.css'


function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <div className={styles.avatarContainer}>
          <img src="/images/Avatar.jpeg" alt='Avatar' className={`${styles.avatar} ${styles.slideInLeft}`} />
        </div>
        <div className={`${styles.textos} ${styles.slideInRight}`}>
          <h2>SOBRE</h2>
          <p>Sou <span>DOUGLAS SANTOS</span></p>
          <p><strong>DEV FULL STACK</strong></p>
          <p>Estudante de Análise e Desenvolvimento de Sistemas tenho algumas habilidades de Dev Full Stack.</p>
          <p>Sou apaixonado por transformar ideias em realidade digital.</p>
          <p>Estudando Desenvolvimento em criações de aplicações dinâmicas e intuitivas com foco <br /></p>
          <p>na experiência do usuário.</p>
        </div>
      </div>
      <div className={styles.techs}>
        <h3 className={styles.slideInLeft}>TECHS</h3>
        <div className={`${styles.icones} `}>
          <img src="/images/Html.jpeg" alt='icone do html' />
          <img src="/images/Css.jpeg" alt='icone do css' />
          <img src="/images/Js.jpeg" alt='icone do js' />
          <img src="/images/React.jpeg" alt='icone do react' />
          <img src="/images/Node.jpeg" alt='icone do node' />
          <img src="/images/Sql.jpeg" alt='icone do sql' />
        </div>
      </div>
    </section>
  )
}

export default Sobre

