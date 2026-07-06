import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
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
      /* Removemos a pílula branca e colocamos fundo preto de ponta a ponta */
      style={{ 
        background: '#050505', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)' 
      }}
    >
      {/* Alterado de 'container' para 'container-fluid' para ocupar a tela toda */}
      <div className="container-fluid px-4 px-lg-5">
        <header className="d-flex align-items-center justify-content-between py-3 mx-auto">
          
          <a href="/" className="d-flex align-items-center text-decoration-none">
            {/* Removido o filtro que deixava a logo preta */}
            <img src="/images/assets/Logo_Dunatech.png" width="160" alt="Logo Dunatech" /> 
          </a>

          <nav className="d-none d-md-flex gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-decoration-none text-white fw-bold"
                style={{ fontSize: '0.85rem', letterSpacing: '2px', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#4d98e2'}
                onMouseOut={(e) => e.currentTarget.style.color = 'white'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div>
            <motion.a
              href="/contato"
              className="btn brutalist-btn px-4 py-2 text-dark bg-white border-0"
              whileHover={{ backgroundColor: '#4d98e2', color: '#fff', scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              INICIAR_PROJETO
            </motion.a>
          </div>
        </header>
      </div>
    </motion.section>
  );
}