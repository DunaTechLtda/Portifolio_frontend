import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { title: 'Qualidade Garantida', desc: 'Códigos limpos e testados', icon: 'bi-check-circle-fill' },
  { title: 'Entrega Rápida', desc: 'Prazos sempre cumpridos', icon: 'bi-lightning-charge-fill' },
  { title: 'Segurança', desc: 'Proteção de dados garantida', icon: 'bi-shield-check' },
  { title: 'Suporte 24/7', desc: 'Sempre disponíveis', icon: 'bi-headset' },
];

export default function About() {
  return (
    <section id="About" className="about-fluid-section position-relative py-5">
      <div className="container py-5 position-relative z-1">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <motion.div
              className="about-visual-stack position-relative"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
            >
              <motion.div className="about-image-frame glass-card" animate={{ y: [0, -10, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}>
                <img src="/images/assets/about.svg" alt="Sobre a Dunatech" className="img-fluid about-image" />
              </motion.div>
              <div className="about-floating-badge glass-card">Tech Fluidity / Identity / Motion</div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-eyebrow">Sobre</span>
              <h2 className="section-title mt-3 mb-3">Uma equipe orientada a produto, narrativa visual e execução técnica.</h2>
              <p className="section-copy mb-4">
                Somos uma empresa especializada em desenvolvimento de software, comprometida em transformar ideias em soluções digitais inovadoras com estética mais sofisticada e comportamento mais vivo.
              </p>
              <p className="section-copy mb-4">
                Desenvolvemos desde sites institucionais até sistemas complexos de gestão, combinando estratégia, interface e tecnologia para dar mais clareza e presença ao digital.
              </p>

              <div className="about-highlights-grid mb-4">
                {highlights.map((item, idx) => (
                  <motion.article
                    className="glass-card about-highlight-card"
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: idx * 0.06 }}
                    whileHover={{ y: -4 }}
                  >
                    <i className={`bi ${item.icon} about-highlight-icon`} />
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </motion.article>
                ))}
              </div>

              <motion.a
                href="/contato"
                className="btn btn-primary btn-lg tech-cta-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="bi bi-chat-dots me-2"></i>Fale Conosco
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}