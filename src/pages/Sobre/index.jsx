/* Pagina Sobre */

import styles from './Sobre.module.css'
import Html from './images/Html.jpeg'
import Css from './images/Css.jpeg'
import Js from './images/Js.jpeg'
import React from './images/React.jpeg'
import Node from './images/Node.jpeg'
import Sql from './images/Sql.jpeg'
import avatar from './images/avatar.jpeg'


function Sobre() {
  return (
      <section className={styles.sobre}>
           <div className={styles.bio}>
              <div className={styles.avatarContainer}>
                  <img src={avatar} alt='Avatar' className={`${styles.avatar} ${styles.slideInLeft}`} />
              </div>
              <div className={`${styles.textos} ${styles.slideInRight}`}>
                  <h2>SOBRE</h2>
                  <p>Sou <span>DOUGLAS SANTOS</span></p>
                  <p><strong>DEV FULL STACK</strong></p>
                  <p>Estudante de Análise e Desenvolvimento de Sistemas tenho algumas habilidades de Dev Full Stack.</p>
                  <p>Sou apaixonado por transformar idéias em realidade digital.</p>
                  <p>Estudando Desenvolvimento em criações de aplicações dinâmicas e intuitivas com foco <br /></p>
                  <p>na experiência do usuário.</p>
              </div>
          </div>
          <div className={styles.techs}>
              <h3 className={styles.slideInLeft}>TECHS</h3>
              <div className={`${styles.icones} `}>
                  <img src={Html} alt='icone do html'/>
                  <img src={Css} alt='icone do css'/>
                  <img src={Js} alt='icone do js'/>
                  <img src={React} alt='icone do react'/>
                  <img src={Node} alt='icone do node'/>
                  <img src={Sql} alt='icone do sql'/>
              </div>
          </div>
      </section>
  )
}

export default Sobre

