import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';


const Root = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalTime = 10000; // 10 segundos
    const increment = 100 / (totalTime / 100); // Calcula incrementos para 100% em 60s

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
     <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#070443e1',
    color: '#e0ebe7',
    fontFamily: "'Orbitron', 'Fira Code', monospace"
  }}>
    <h1 style={{ 
      fontSize: '2rem', 
      marginBottom: '20px',
      position: 'relative'
    }}>
      Carregando
      <span style={{
        display: 'inline-block',
        width: '1ch',
        animation: 'dots 1s steps(3, end) infinite',
        verticalAlign: 'bottom'
      }}></span>
    </h1>
    
    {/* Barra de progresso */}
    <div style={{
      width: '300px',
      height: '6px',
      background: 'rgba(68, 68, 68, 0.3)',
      borderRadius: '3px',
      margin: '20px auto',
      overflow: 'hidden'
    }}>
      <div style={{
        height: '100%',
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #00ff88, #00b8ff)',
        borderRadius: '3px',
        transition: 'width 0.3s ease-out'
      }} />
    </div>

    <style>{`
      @keyframes dots {
        0% { content: ""; }
        33% { content: "."; }
        66% { content: ".."; }
        100% { content: "..."; }
      }
     span::after {
        content: ".";
        animation: dots 1s infinite;
      }
    `}</style>
  </div>
    );
  }

  return (
    <>
     <ThemeProvider>
      <App />
      </ThemeProvider>
      <Analytics />
      <SpeedInsights debug={true} />
    </>
  );
};

export default Root