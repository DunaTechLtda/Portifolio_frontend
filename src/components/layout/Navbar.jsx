import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ theme = 'dark', toggleTheme }) {
  const navItems = [
    { label: 'Início', href: '#Inicio' },
    { label: 'Serviços', href: '#Servicos' },
    { label: 'Portfólio', href: '/portfolio' },
    { label: 'FAQs', href: '/faqs' },
  ];

  const isLightTheme = theme === 'light';

  return (
    <motion.section
      id="Navbar"
      className="tech-navbar-shell fixed-top"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <header className="tech-navbar glass-card d-flex flex-column flex-xl-row align-items-center justify-content-between gap-4 gap-xl-5 px-4 px-md-5 py-4 py-xl-4">
          <motion.a
            href="/"
            className="navbar-brand tech-navbar-brand d-inline-flex align-items-center gap-3 text-decoration-none"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/images/assets/Logo_Dunatech.png" width="206" alt="Logo da Dunatech" className="img-fluid tech-navbar-logo" />
            <span className="d-none d-xl-inline tech-navbar-tag text-uppercase">Tech Fluidity</span>
          </motion.a>

          <nav aria-label="Navegação principal" className="tech-navbar-nav d-flex flex-wrap align-items-center justify-content-center gap-3 gap-md-4">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="tech-nav-link"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.label}
              </motion.a>
            ))}
            <button
              type="button"
              className="tech-theme-toggle"
              onClick={toggleTheme}
              aria-label={isLightTheme ? 'Ativar tema escuro' : 'Ativar tema claro'}
            >
              <span className="tech-theme-toggle-track">
                <span className={`tech-theme-toggle-thumb ${isLightTheme ? 'is-light' : 'is-dark'}`} />
              </span>
              <span className="tech-theme-toggle-label">
                {isLightTheme ? 'Claro' : 'Escuro'}
              </span>
            </button>
            <motion.a
              href="/contato"
              className="btn btn-primary tech-nav-cta"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(77, 152, 226, 0.35)' }}
              whileTap={{ scale: 0.98 }}
            >
              Contato
            </motion.a>
          </nav>
        </header>
      </div>
    </motion.section>
  );
}