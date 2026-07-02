import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const navItems = [
    { label: 'Início', href: '#Inicio' },
    { label: 'Serviços', href: '#Servicos' },
    { label: 'Portfólio', href: '/portfolio' },
    { label: 'FAQs', href: '/faqs' },
  ];

  return (
    <motion.section
      id="Navbar"
      className="tech-navbar-shell fixed-top"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <header className="tech-navbar glass-card d-flex flex-column flex-lg-row align-items-center justify-content-between gap-3 gap-lg-4 px-3 px-md-4 py-3">
          <motion.a
            href="/"
            className="navbar-brand d-inline-flex align-items-center gap-3 text-decoration-none"
            whileHover={{ scale: 1.02 }}
          >
            <img src="/images/assets/Logo_Dunatech.png" width="160" alt="Logo da Dunatech" className="img-fluid" />
            <span className="d-none d-xl-inline tech-navbar-tag text-uppercase">Tech Fluidity</span>
          </motion.a>

          <nav aria-label="Navegação principal" className="d-flex flex-wrap align-items-center justify-content-center gap-2 gap-md-3">
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