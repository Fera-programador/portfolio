// src/app/layout.jsx
import { Analytics } from "@vercel/analytics/react";
import PropTypes from "prop-types";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics /> */ Componente de Analytics aqui */ 
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};