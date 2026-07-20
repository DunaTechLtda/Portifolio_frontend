import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
  const navItems = [
    { label: 'INÍCIO', href: '/#Inicio' },
    { label: 'SERVIÇOS', href: '/#Servicos' },
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
      <div className="container-fluid px-3 px-lg-5">
        <header className="d-flex align-items-center justify-content-between py-3 mx-auto">
          
          <a href="/" className="d-flex align-items-center text-decoration-none">

            <img 
              src={theme === 'light' ? "/assets/dunatechPRETO.png" : "/assets/Logo_Dunatech.png"} 
              alt="Logo Dunatech" 
              className="img-fluid"
              style={{ maxWidth: '140px', transition: 'opacity 0.3s ease' }}
            /> 
          </a>

          <nav className="d-none d-md-flex gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-decoration-none fw-bold"
                style={{ 
                  color: 'var(--brutal-text)',
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

          <div className="d-flex align-items-center gap-2 gap-md-3">
            
            <button 
              onClick={toggleTheme}
              className="btn d-flex align-items-center justify-content-center"
              style={{
                background: 'transparent',
                border: '1px solid var(--brutal-border)',
                color: 'var(--brutal-text)',
                borderRadius: '0', 
                width: '45px',
                height: '45px'
              }}
              title={theme === 'light' ? 'Mudar para Modo Escuro' : 'Mudar para Modo Claro'}
            >
              <i className={`bi fs-5 ${theme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}`}></i>
            </button>

            <motion.a
              href="/contato"
              className="btn btn-logo-both brutalist-btn py-2 border-0 fw-bold d-none d-md-flex align-items-center justify-content-center"
              style={{
                backgroundColor: 'var(--brutal-text)',
                color: 'var(--brutal-bg)'
              }}
              whileHover={{ backgroundColor: '#4d98e2', color: '#fff', scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              INICIAR PROJETO
            </motion.a>

            <button 
              className="btn d-md-none d-flex align-items-center justify-content-center" 
              type="button" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#mobileMenu" 
              aria-controls="mobileMenu"
              style={{
                background: 'var(--brutal-text)',
                border: 'none',
                color: 'var(--brutal-bg)',
                borderRadius: '0', 
                width: '45px',
                height: '45px'
              }}
            >
              <i className="bi bi-list fs-3"></i>
            </button>

          </div>
        </header>
      </div>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel" style={{ backgroundColor: 'var(--brutal-bg)', borderLeft: '1px solid var(--brutal-border)' }}>
        
        <div className="offcanvas-header border-bottom py-4" style={{ borderColor: 'var(--brutal-border) !important' }}>
          <h5 className="offcanvas-title fw-black text-uppercase" id="mobileMenuLabel" style={{ color: 'var(--brutal-text)', letterSpacing: '2px' }}>
            MENU
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{ filter: theme === 'light' ? 'none' : 'invert(1)' }}></button>
        </div>
        
        <div className="offcanvas-body d-flex flex-column mt-4 px-4">
          <nav className="d-flex flex-column gap-4 mb-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-decoration-none fw-bold text-uppercase fs-4"
                style={{ 
                  color: 'var(--brutal-text)',
                  letterSpacing: '2px',
                }}
                data-bs-dismiss="offcanvas" 
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="mt-auto mb-4">
            <a
              href="/contato"
              className="btn btn-logo-both brutalist-btn py-3 border-0 fw-bold d-flex align-items-center justify-content-center w-100 text-uppercase"
              style={{
                backgroundColor: 'var(--brutal-text)',
                color: 'var(--brutal-bg)',
                letterSpacing: '1px'
              }}
            >
              INICIAR PROJETO
            </a>
          </div>
        </div>

      </div>
    </motion.section>
  );
}