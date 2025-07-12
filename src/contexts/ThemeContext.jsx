/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(() => {
    // Tenta carregar o tema salvo no localStorage
    const savedTheme = localStorage.getItem('lightMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleLightMode = () => {
    setLightMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem('lightMode', JSON.stringify(newTheme));
      return newTheme;
    });
  };

  useEffect(() => {
    // Aplica a classe no body
    document.body.className = lightMode ? 'light' : 'dark';
  }, [lightMode]);

  return (
    <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
