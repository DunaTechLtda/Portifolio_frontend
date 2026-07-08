import React from 'react';
import { motion } from 'framer-motion';

// Ícones específicos e cores neon para cada característica
const features = [
  { 
    title: "Qualidade Garantida", 
    desc: "Códigos limpos e testados", 
    icon: "bi-check-square-fill", 
    color: "#00E676" // Verde
  },
  { 
    title: "Entrega Rápida", 
    desc: "Prazos sempre cumpridos", 
    icon: "bi-lightning-charge-fill", 
    color: "#FFEA00" // Amarelo
  },
  { 
    title: "Segurança Total", 
    desc: "Proteção de dados rigorosa", 
    icon: "bi-shield-lock-fill", 
    color: "#B388FF" // Roxo
  },
  { 
    title: "Suporte 24/7", 
    desc: "Sempre disponíveis", 
    icon: "bi-headset", 
    color: "#4d98e2" // Azul
  }
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
            {/* <div className="eyebrow-box mb-4 text-white">
              <span>[03]</span>
              <div className="eyebrow-divider"></div>
              <span>SOBRE_NÓS</span>/
            </div> */}
            
            {/* Título limpo, sem elementos extras piscando ou girando */}
            <h2 className="text-huge text-white mb-4" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
              SOBRE A DUNATECH
            </h2>
            
            <p className="text-white fs-5 fw-bold mb-3">
              Somos uma empresa especializada em desenvolvimento de software, comprometida em transformar ideias em soluções digitais inovadoras.
            </p>
            <p className="text-secondary fw-medium mb-5" style={{ fontSize: '1.1rem' }}>
              Com foco na excelência técnica e atendimento personalizado, desenvolvemos desde sites institucionais até sistemas complexos de gestão, sempre utilizando as tecnologias mais modernas e práticas de desenvolvimento ágil.
            </p>

            <motion.a
              href="/contato"
              className="btn btn-logo-both brutalist-btn py-3 d-inline-flex align-items-center justify-content-center gap-2 border-0 fw-bold"
              style={{ background: '#FFEA00', color: '#000' }}
              whileHover={{ scale: 1.03, backgroundColor: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
            >
              FALE CONOSCO <i className="bi bi-chat-dots-fill"></i>
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
                  {/* Card com hover interativo mantido */}
                  <motion.div 
                    className="brutal-card-hover p-4 h-100 d-flex flex-column justify-content-center" 
                    style={{ 
                      '--hover-color': item.color,
                      border: '1px solid var(--brutal-border)', 
                      backgroundColor: 'var(--brutal-bg)' 
                    }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: `6px 6px 0px rgba(0,0,0,0.1)` 
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <i className={`bi ${item.icon}`} style={{ fontSize: '1.5rem', color: item.color }}></i>
                      <strong className="text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.9rem' }}>{item.title}</strong>
                    </div>
                    <p className="mb-0 fw-medium" style={{ opacity: 0.8 }}>
                      {item.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}