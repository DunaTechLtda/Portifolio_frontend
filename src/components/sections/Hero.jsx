import React from 'react';
import { motion } from 'framer-motion';

const titleLines = [
  ['Construímos'],
  ['experiências digitais'],
  ['com movimento constante.'],
];

const marqueeItems = [
  'React',
  'Framer Motion',
  'Vite',
  'Bootstrap 5',
  'Node.js',
  'Python',
  'TypeScript',
  'UI Systems',
];

const heroVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const lineVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const floatVariant = (distance, duration, delay = 0) => ({
  y: [0, -distance, 0],
  x: [0, distance / 3, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: 'easeInOut',
    delay,
  },
});

export default function Hero() {
  return (
    <section id="Inicio" className="hero-fluid-section position-relative overflow-hidden">
      <motion.div
        className="hero-glow hero-glow-blue"
        animate={{ scale: [1, 1.12, 1], opacity: [0.48, 0.8, 0.48] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-glow hero-glow-violet"
        animate={{ scale: [1, 1.18, 1], opacity: [0.32, 0.62, 0.32] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      />

      <div className="hero-grid-mask" />
      <div className="hero-grid-perspective" />

      <div className="container position-relative hero-content-shell">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 position-relative z-1">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
            >
              <motion.div className="hero-kicker glass-card d-inline-flex align-items-center gap-2 px-3 py-2 mb-4" variants={wordVariants}>
                <span className="hero-kicker-dot" />
                Tech Fluidity • Interfaces vivas para SaaS e institucionais
              </motion.div>

              <motion.h1 className="hero-title mb-4" variants={wordVariants}>
                {titleLines.map((line, lineIndex) => (
                  <motion.span key={lineIndex} className="hero-title-line d-block" variants={lineVariants}>
                    {line.map((word, wordIndex) => (
                      <motion.span key={`${lineIndex}-${wordIndex}`} className="hero-title-word d-inline-block me-2" variants={wordVariants}>
                        {word}
                      </motion.span>
                    ))}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p className="hero-copy mb-4" variants={wordVariants}>
                Transformamos sites estáticos em experiências dinâmicas com profundidade, assimetria e animações contínuas que deixam a interface com sensação de produto vivo.
              </motion.p>

              <motion.div className="d-flex flex-wrap align-items-center gap-3 mb-5" variants={wordVariants}>
                <motion.a
                  href="/contato"
                  className="btn btn-primary btn-lg tech-cta-primary"
                  whileHover={{ scale: 1.04, boxShadow: '0 0 36px rgba(77, 152, 226, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Iniciar projeto
                </motion.a>
                <motion.a
                  href="#Servicos"
                  className="btn btn-outline-light btn-lg tech-cta-secondary"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver soluções
                </motion.a>
              </motion.div>

              <motion.div className="hero-meta-grid" variants={wordVariants}>
                <div className="glass-card hero-meta-item">
                  <span className="hero-meta-value">3x</span>
                  <span className="hero-meta-label">mais presença visual</span>
                </div>
                <div className="glass-card hero-meta-item">
                  <span className="hero-meta-value">24/7</span>
                  <span className="hero-meta-label">movimento de interface</span>
                </div>
                <div className="glass-card hero-meta-item">
                  <span className="hero-meta-value">UI+</span>
                  <span className="hero-meta-label">glass, glow e depth</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="col-lg-6 position-relative z-1">
            <div className="hero-dashboard-stage">
              <motion.div
                className="hero-dashboard-card hero-dashboard-card-lg glass-card"
                animate={floatVariant(18, 7.5, 0)}
              >
                <div className="hero-dashboard-card-header">
                  <span className="hero-chip hero-chip-accent">Analytics Live</span>
                  <span className="hero-chip">Realtime</span>
                </div>
                <div className="hero-dashboard-bars">
                  <span style={{ height: '42%' }} />
                  <span style={{ height: '68%' }} />
                  <span style={{ height: '56%' }} />
                  <span style={{ height: '78%' }} />
                  <span style={{ height: '64%' }} />
                </div>
              </motion.div>

              <motion.div
                className="hero-dashboard-card hero-dashboard-card-sm glass-card"
                animate={floatVariant(12, 5.8, 0.4)}
              >
                <div className="hero-dashboard-mini-label">Conversion</div>
                <div className="hero-dashboard-mini-value">+38.4%</div>
                <div className="hero-dashboard-mini-track">
                  <span />
                </div>
              </motion.div>

              <motion.div
                className="hero-dashboard-card hero-dashboard-card-md glass-card"
                animate={floatVariant(16, 6.8, 0.7)}
              >
                <div className="hero-dashboard-mini-label">Workflows</div>
                <div className="hero-dashboard-list">
                  <span><i className="bi bi-check2-circle" /> Architecture</span>
                  <span><i className="bi bi-check2-circle" /> Motion system</span>
                  <span><i className="bi bi-check2-circle" /> Design tokens</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-marquee-shell position-relative">
        <div className="hero-marquee-edge hero-marquee-edge-left" />
        <div className="hero-marquee-edge hero-marquee-edge-right" />
        <motion.div
          className="hero-marquee-track d-flex align-items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={`${item}-${index}`} className="hero-marquee-pill glass-card">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
