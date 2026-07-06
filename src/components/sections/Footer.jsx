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
    <section id="Footer" className="tech-grid-bg border-top" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
      {/* O footer agora ocupa 100% da largura e o fundo preto vai até as bordas */}
      <footer className="w-100 py-5" style={{ backgroundColor: '#050505' }}>
        
        {/* Usamos container-fluid para alinhar com a Navbar, mas mantendo um respiro nas laterais */}
        <div className="container-fluid px-4 px-lg-5">
          <div className="row g-4 align-items-center">
            
            {/* Bloco 1: Marca */}
            <div className="col-lg-4">
              <motion.a 
                href="#Inicio" 
                className="d-inline-flex align-items-center gap-3 text-decoration-none text-white" 
                whileHover={{ scale: 1.02 }}
              >
                <img src="/images/assets/Simbolo_Dunatech.png" width="54" alt="Logo Dunatech" />
                <div>
                  <strong className="d-block text-uppercase fs-5" style={{ letterSpacing: '1px' }}>DUNATECH</strong>
                  <span className="text-secondary fw-bold" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>SOFTWARE_HOUSE</span>
                </div>
              </motion.a>
            </div>

            {/* Bloco 2: Navegação com botões secos */}
            <div className="col-lg-4 d-flex justify-content-lg-center">
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {navItems.map((item) => (
                  <motion.a 
                    key={item.label}
                    href={item.href} 
                    className="text-white text-decoration-none fw-bold px-3 py-2 text-uppercase"
                    style={{ 
                      border: '1px solid rgba(255,255,255,0.2)', 
                      fontSize: '0.8rem', 
                      letterSpacing: '1px',
                      transition: 'color 0.2s ease'
                    }}
                    whileHover={{ 
                      backgroundColor: '#4d98e2', // Azul Dunatech
                      borderColor: '#4d98e2',
                      color: '#000000',
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bloco 3: Copyright e Informações Técnicas */}
            <div className="col-lg-4 text-lg-end">
              <p className="text-secondary fw-bold mb-1 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                © {currentYear} DUNATECH. <span className="text-white">TODOS OS DIREITOS RESERVADOS.</span>
              </p>
              <p className="mb-0 text-uppercase fw-bold" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px' }}>
                SISTEMAS SOB MEDIDA, APPS E AUTOMAÇÕES.
              </p>
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
}