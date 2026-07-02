import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="Footer" className="footer-fluid-section position-relative py-5">
      <div className="container py-4 position-relative z-1">
        <footer className="glass-card footer-glass-shell p-4 p-md-5">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4">
              <motion.a href="#Inicio" className="footer-brand d-inline-flex align-items-center gap-3 text-decoration-none" whileHover={{ scale: 1.02 }}>
                <img src="/images/assets/Simbolo_Dunatech.png" width="54" alt="Logo Dunatech" />
                <div>
                  <strong>Dunatech</strong>
                  <span>Interfaces com vida constante</span>
                </div>
              </motion.a>
            </div>

            <div className="col-lg-4">
              <p className="footer-copy mb-0">
                © {currentYear} Dunatech. Sites, sistemas e experiências digitais pensadas para parecerem produto, não só página.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="footer-links">
                <a href="#Inicio">Início</a>
                <a href="#Servicos">Serviços</a>
                <a href="/portfolio">Portfólio</a>
                <a href="/faqs">FAQs</a>
                <a href="/contato">Contato</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}