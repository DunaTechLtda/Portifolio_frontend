import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
  const navItems = [
    { label: 'INÍCIO', href: '#Inicio' },
    { label: 'SERVIÇOS', href: '#Servicos' },
    { label: 'PORTFÓLIO', href: '/portfolio' },
    { label: 'FAQS', href: '/faqs' },
  ];

  return (
    <motion.section
      id="Navbar"
      className="fixed-top"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ 
        background: 'var(--brutal-bg)', 
        borderBottom: '1px solid var(--brutal-border)' 
      }}
    >
      <div className="container-fluid px-4 px-lg-5">
        <header className="d-flex align-items-center justify-content-between py-3 mx-auto">
          
          <a href="/" className="d-flex align-items-center text-decoration-none">
            {/* Filtro inteligente: inverte a logo branca para preta no tema claro */}
            <img 
              src="/images/assets/Logo_Dunatech.png" 
              width="160" 
              alt="Logo Dunatech" 
              style={{ filter: theme === 'light' ? 'invert(1) hue-rotate(180deg)' : 'none', transition: 'filter 0.3s ease' }}
            /> 
          </a>

          <nav className="d-none d-md-flex gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-decoration-none fw-bold"
                style={{ 
                  color: 'var(--brutal-text)', /* Usa a variável dinâmica */
                  fontSize: '0.85rem', 
                  letterSpacing: '2px', 
                  transition: 'color 0.2s ease' 
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#4d98e2'}
                onMouseOut={(e) => e.currentTarget.style.color = 'var(--brutal-text)'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="d-flex align-items-center gap-3">
            
            {/* O BOTÃO DE TEMA */}
            <button 
              onClick={toggleTheme}
              className="btn d-flex align-items-center justify-content-center"
              style={{
                background: 'transparent',
                border: '1px solid var(--brutal-border)',
                color: 'var(--brutal-text)',
                borderRadius: '0', /* Mantendo o estilo brutalista quadrado */
                width: '45px',
                height: '45px'
              }}
              title={theme === 'light' ? 'Mudar para Modo Escuro' : 'Mudar para Modo Claro'}
            >
              <i className={`bi fs-5 ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
            </button>

            {/* BOTÃO "INICIAR PROJETO" ATUALIZADO COM O FORMATO < > */}
            <motion.a
              href="/contato"
              className="btn btn-logo-both brutalist-btn py-2 border-0 fw-bold d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: 'var(--brutal-text)', /* Botão branco no escuro, preto no claro */
                color: 'var(--brutal-bg)'
              }}
              whileHover={{ backgroundColor: '#4d98e2', color: '#fff', scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              INICIAR PROJETO
            </motion.a>
          </div>
        </header>
      </div>
    </motion.section>
  );
}