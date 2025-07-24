// Página Contato  ATUALIZADA 2025

import { useState, useEffect } from "react";
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import PropTypes from "prop-types";

function Contatos() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [Nome, setNome] = useState("");
  const [Email, setEmail] = useState("");
  const [Mensagem, setMensagem] = useState("");

  useEffect(() => {
    setAnimate(true);
    return () => setAnimate(false);
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    const response = await fetch("http://backend-portfolio-gudw.onrender.com/api/mensagem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Nome, Email, Mensagem }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Erro ao enviar a mensagem");
    }

    setSubmitted(true);
    setNome("");
    setEmail("");
    setMensagem("");
  } catch (error) {
    console.error("Erro no envio:", error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <section className={styles.contatos} id="contatos">
      <h2 className={`${styles.slideInTop} ${animate ? styles.animate : ""}`}>
        CONTATOS
      </h2>

      {submitted ? (
        <ThankYouMessage onReset={() => setSubmitted(false)} />
      ) : (
        <>
          <h3 className={`${styles.slideInLeft} ${animate ? styles.animate : ""}`}>
            Entre em contato
          </h3>
          <p className={`${styles.slideInRight} ${animate ? styles.animate : ""}`}>
            <strong>Para que possamos conversar mais sobre...</strong>
          </p>

          {error && (
            <div className={`${styles.error} ${styles.slideInBottom} ${animate ? styles.animate : ""}`}>
              ❌ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="Nome"
              placeholder="Seu Nome"
              required
              className={`${styles.inputField} ${styles.slideInLeft} ${animate ? styles.animate : ""}`}
              style={{ animationDelay: "0.3s" }}
              onChange={(e) => setNome(e.target.value)}
              value={Nome}
            />

            <input
              type="email"
              name="Email"
              placeholder="Seu Melhor E-mail"
              required
              className={`${styles.inputField} ${styles.slideInRight} ${animate ? styles.animate : ""}`}
              style={{ animationDelay: "0.4s" }}
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
            />

            <textarea
              name="Mensagem"
              rows="5"
              placeholder="Sua Mensagem..."
              required
              className={`${styles.textarea} ${styles.slideInLeft} ${animate ? styles.animate : ""}`}
              style={{ animationDelay: "0.5s" }}
              onChange={(e) => setMensagem(e.target.value)}
              value={Mensagem}
            ></textarea>

            <button
              type="submit"
              className={`${styles.button} ${styles.slideInRight} ${animate ? styles.animate : ""}`}
              style={{ animationDelay: "0.6s" }}
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : "Enviar Mensagem"}
            </button>
          </form>

          <div className={styles.icones}>
            <a href="mailto:dsdouglas13@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Enviar email">
              <GoMail className={styles.icone} />
            </a>
            <a href="https://www.instagram.com/ddinestimavel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <BsInstagram className={styles.icone} />
            </a>
            <a href="https://www.github.com/Fera-programador/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <BsGithub className={styles.icone} />
            </a>
            <a href="https://www.linkedin.com/in/douglas-souza-dos-santos-113211261/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BsLinkedin className={styles.icone} />
            </a>
          </div>
        </>
      )}
    </section>
  );
}

function ThankYouMessage({ onReset }) {
  return (
    <div className={`${styles.thankYou} ${styles.slideInUp}`}>
      <h3>Mensagem Enviada ✅</h3>
      <p>Obrigado pelo seu contato.</p>
      <p> Responderei o mais breve possível...</p>
      <button onClick={onReset} className={styles.button} type="button">
        Enviar nova mensagem
      </button>
    </div>
  );
}

ThankYouMessage.propTypes = {
  onReset: PropTypes.func.isRequired,
};

function LoadingSpinner() {
  return <div className={styles.spinner}></div>;
}

export default Contatos
