import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: 'INÍCIO', href: '#Inicio' },
    { label: 'SERVIÇOS', href: '#Servicos' },
    { label: 'PORTFÓLIO', href: '/portfolio' },
    { label: 'FAQS', href: '/faqs' },
    { label: 'CONTATO', href: '/contato' },
  ];

  return (
    <section id="Footer" className="tech-grid-bg border-top" style={{ borderColor: 'var(--brutal-border)' }}>
      <footer className="w-100 py-5" style={{ backgroundColor: 'var(--brutal-bg)' }}>
        
        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-4 align-items-center">
            
            {/* Coluna da Logo (Reduzida para col-lg-3) */}
            <div className="col-lg-3">
              <motion.a 
                href="#Inicio" 
                className="d-inline-flex align-items-center gap-3 text-decoration-none text-white" 
                whileHover={{ scale: 1.02 }}
              >
                <img src="/public/assets/Simbolo_Dunatech.png" width="54" alt="Logo Dunatech" className="adaptive-logo" />
                <div>
                  <strong className="d-block text-uppercase fs-5" style={{ letterSpacing: '1px', color: 'var(--brutal-text)' }}>DUNATECH</strong>
                  <span className="text-secondary fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>SOFTWARE_HOUSE</span>
                </div>
              </motion.a>
            </div>

            {/* Coluna dos Links (Expandida para col-lg-6 para caberem todos na mesma linha) */}
            <div className="col-lg-6 d-flex justify-content-lg-center">
              <div className="d-flex flex-wrap flex-xl-nowrap gap-2 justify-content-center w-100">
                {navItems.map((item) => (
                  <motion.a 
                    key={item.label}
                    href={item.href} 
                    className="btn btn-logo-both btn-logo-outline brutalist-btn py-2 fw-bold text-uppercase d-flex align-items-center justify-content-center"
                    style={{ 
                      color: 'var(--brutal-text)',
                      fontSize: '0.75rem', 
                      letterSpacing: '1px',
                      flex: '1 1 auto' /* Ajuda os botões a se distribuírem melhor */
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Coluna dos Direitos (Reduzida para col-lg-3) */}
            <div className="col-lg-3 text-lg-end">
              <p className="text-secondary fw-bold mb-1 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                © {currentYear} DUNATECH. <span style={{ color: 'var(--brutal-text)' }}>TODOS OS DIREITOS RESERVADOS.</span>
              </p>
              <p className="mb-0 text-uppercase fw-bold text-secondary" style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>
                SISTEMAS SOB MEDIDA, APPS E AUTOMAÇÕES.
              </p>
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
}