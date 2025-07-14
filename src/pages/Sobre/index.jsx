import { useState } from 'react';
import styles from './Sobre.module.css';

function Sobre() {
  const [avatarCarregando, setAvatarCarregando] = useState(true);
  const [techsCarregando, setTechsCarregando] = useState(Array(6).fill(true));

  const handleTechLoad = (index) => {
    setTechsCarregando((prev) => {
      const novo = [...prev];
      novo[index] = false;
      return novo;
    });
  };

  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <div className={styles.avatarContainer}>
          {avatarCarregando && <div className="skeleton skeleton-avatar"></div>}
          <img
            src="/images/Avatar.jpeg"
            alt="Avatar"
            className={`${styles.avatar} ${styles.slideInLeft} ${avatarCarregando ? 'oculto' : ''}`}
            onLoad={() => setAvatarCarregando(false)}
          />
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
        <div className={styles.icones}>
          {['Html', 'Css', 'Js', 'React', 'Node', 'Sql'].map((nome, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {techsCarregando[i] && <div className="skeleton skeleton-icon"></div>}
              <img
                src={`/images/${nome}.jpeg`}
                alt={`icone do ${nome}`}
                className={techsCarregando[i] ? 'oculto' : ''}
                onLoad={() => handleTechLoad(i)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre