/* Pagina Projetos */

import styles from './Projetos.module.css'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiArrowRightCircleFill } from 'react-icons/ri'

function Projetos() {    
      return (
        <section className={styles.projetos}>
        <h2 className={styles.slideInTop}>PROJETOS</h2>
        <section className={styles.lista}>
        <section className={`${styles.card} ${styles.slideInLeft}`}>
                    <h3>Dashboard Python</h3>
                    <p>Dashboard Análise Global</p>
                    <div className={styles.card_footer}>
                        <div className={styles.card_icones}>
                         <FaHtml5 />
                         <FaCss3Alt />
                         <FaJs />
                         <FaReact />
                         </div>
                    <a href='https://dashboard-python-production-2d8e.up.railway.app/' target='_blank' rel="noopener noreferrer" className={styles.botao}>
                          <RiArrowRightCircleFill />
                         </a>
                     </div>
                 </section>
                 <section className={`${styles.card} ${styles.slideInRight}`}>
                    <h3>JOGO DE ADIVINHAÇÃO</h3>
                    <p>Acerte numero entre 1 e 100</p>
                    <div className={styles.card_footer}>
                        <div className={styles.card_icones}>
                         <FaHtml5 />
                         <FaCss3Alt />
                         <FaJs />
                         <FaReact /> 
                         </div>
                    <a href='https://pmzcuo.mimo.run/index.html' target='_blank' rel="noopener noreferrer" className={styles.botao}>
                          <RiArrowRightCircleFill />
                         </a>
                     </div>
                 </section>
                 <section className={`${styles.card} ${styles.slideInLeft}`}>
                    <h3>CONVERSOR DE UNIDADES</h3>
                    <p>Faça a sua Conversão</p>
                    <div className={styles.card_footer}>
                        <div className={styles.card_icones}>
                         <FaHtml5 />
                         <FaCss3Alt />
                         <FaJs />
                         <FaReact />
                         </div>
                    <a href='https://kf5a1y.mimo.run/index.html' target='_blank' rel="noopener noreferrer" className={styles.botao}>
                          <RiArrowRightCircleFill />
                         </a>
                     </div>
                 </section>
                 <section className={`${styles.card} ${styles.slideInRight}`}>
                    <h3>CALCULADORA</h3>
                    <p>Projeto de Calculadora</p>
                    <div className={styles.card_footer}>
                        <div className={styles.card_icones}>
                         <FaHtml5 />
                         <FaCss3Alt />
                         <FaJs />
                         <FaReact />
                         </div>
                    <a href='https://6f742q.mimo.run/index.html' target='_blank' rel="noopener noreferrer" className={styles.botao}>
                          <RiArrowRightCircleFill />
                         </a>
                     </div>
                 </section>
        </section>
       </section>
    )
}

export default Projetos
