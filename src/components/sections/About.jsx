import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: "Qualidade Garantida", desc: "Códigos limpos e testados" },
  { title: "Entrega Rápida", desc: "Prazos sempre cumpridos" },
  { title: "Segurança", desc: "Proteção de dados garantida" },
  { title: "Suporte 24/7", desc: "Sempre disponíveis" }
];

export default function About() {
  return (
    <section id="About" className="tech-grid-bg py-5 border-top" style={{ borderColor: 'var(--brutal-border)' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          
          <motion.div 
            className="col-lg-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="eyebrow-box mb-4 text-white">
              <span>[03]</span>
              <div className="eyebrow-divider"></div>
              <span>SOBRE_NÓS</span>
            </div>
            
            <h2 className="text-huge text-white mb-4" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
              SOBRE A DUNATECH<span className="blinking-cursor" style={{ color: '#00E676' }}>_</span>
            </h2>
            
            <p className="text-white fs-5 fw-bold mb-3">
              Somos uma empresa especializada em desenvolvimento de software, comprometida em transformar ideias em soluções digitais inovadoras.
            </p>
            <p className="text-secondary fw-medium mb-5" style={{ fontSize: '1.1rem' }}>
              Com foco na excelência técnica e atendimento personalizado, desenvolvemos desde sites institucionais até sistemas complexos de gestão, sempre utilizando as tecnologias mais modernas e práticas de desenvolvimento ágil.
            </p>

            <motion.a
              href="/contato"
              className="btn brutalist-btn px-5 py-3 d-inline-flex align-items-center gap-2 border-0"
              style={{ background: '#FFEA00', color: '#000' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              FALE_CONOSCO <i className="bi bi-chat-dots-fill"></i>
            </motion.a>
          </motion.div>

          <div className="col-lg-6">
            <div className="row g-3">
              {features.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="col-sm-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-4 h-100" style={{ border: '1px solid var(--brutal-border)', backgroundColor: 'var(--brutal-bg)' }}>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div style={{ width: '12px', height: '12px', backgroundColor: '#4d98e2' }}></div>
                      <strong className="text-white text-uppercase" style={{ letterSpacing: '1px' }}>{item.title}</strong>
                    </div>
                    <p className="text-secondary mb-0 fw-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}