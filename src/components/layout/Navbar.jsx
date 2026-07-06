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
      className="fixed-top mt-3 px-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container">
        <header 
          className="d-flex align-items-center justify-content-between px-4 py-3 mx-auto"
          style={{
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            borderRadius: '999px',
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
            maxWidth: '1100px'
          }}
        >
          <a href="/" className="d-flex align-items-center text-decoration-none">
            {/* Adicionado um filter para inverter a cor da logo branca para preta/azul escura no tema claro */}
            <img src="/images/assets/Logo_Dunatech.png" width="160" alt="Logo Dunatech" style={{ filter: 'brightness(0) invert(0)' }} /> 
          </a>

          <nav className="d-none d-md-flex gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-decoration-none fw-medium"
                style={{ color: '#475569', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#052af2'}
                onMouseOut={(e) => e.currentTarget.style.color = '#475569'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <motion.a
              href="/contato"
              className="btn btn-primary px-4 py-2 fw-semibold border-0"
              style={{ borderRadius: '999px', background: 'linear-gradient(90deg, #052af2, #4d98e2)' }}
              whileTap={{ scale: 0.96 }}
            >
              Contato
            </motion.a>
          </div>
        </header>
      </div>
    </motion.section>
  );
}