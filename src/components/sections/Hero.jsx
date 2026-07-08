import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// As cores vivas injetadas no layout brutalista
const dynamicWords = [
  { text: "ROBUSTAS", color: "#4d98e2" }, // Azul Claro Dunatech
  { text: "OTIMIZADAS", color: "#00E676" },    // Verde Neon
  { text: "CRIATIVAS", color: "#FFEA00" },// Amarelo Vibrante
  { text: "ESCALÁVEIS", color: "#B388FF" },// Roxo Brilhante
  { text: "INOVADORAS", color: "#ff8888" }// Vermelho Neon
];

// Array atualizado com os ícones do Devicon
const marqueeItems = [
  { text: 'REACT', icon1: 'devicon-react-original colored' },
  { text: 'NODE.JS', icon1: 'devicon-nodejs-plain-wordmark colored' },
  { text: 'PYTHON', icon1: 'devicon-python-plain colored' },
  { text: 'UI/UX', icon1: 'devicon-figma-plain colored' },
  { text: 'MOBILE', icon1: 'devicon-android-plain colored', icon2: 'devicon-apple-original' }, // Mobile leva 2 ícones
  { text: 'CLOUD', icon1: 'devicon-amazonwebservices-plain-wordmark colored' },
  { text: 'IA', icon1: 'devicon-tensorflow-original colored' }, // Usando TensorFlow para representar IA
  { text: 'DATA', icon1: 'devicon-postgresql-plain colored' }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Inicio" className="hero-fluid-section overflow-hidden d-flex flex-column justify-content-center" style={{ minHeight: '100vh', paddingTop: '140px' }}>
      
      {/* Mantém as luzes e o grid do seu tech-site/nav-hero.css */}
      <div className="hero-glow hero-glow-blue"></div>
      <div className="hero-glow hero-glow-violet"></div>
      <div className="hero-grid-mask"></div>
      <div className="hero-grid-perspective"></div>

      <div className="container position-relative z-1 flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          
          <div className="hero-kicker glass-card d-inline-flex align-items-center gap-3 px-4 py-2 mb-4 fw-bold" style={{ letterSpacing: '2px', border: `1px solid ${dynamicWords[index].color}`, transition: 'border-color 0.3s' }}>
            <span>DUNATECH</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: dynamicWords[index].color, transition: 'background 0.3s' }}></span>
            <span>SOFTWARE_HOUSE</span>
          </div>

          <h1 className="text-titan mb-4">
            <span>SOLUÇÕES</span>
            <span>DIGITAIS</span>
            
            {/* Adicionamos position-relative e mx-auto aqui */}
            <span className="position-relative d-inline-flex align-items-center justify-content-center mx-auto">
              
              {/* A palavra que centraliza de verdade */}
              <span className="overflow-hidden" style={{ color: dynamicWords[index].color, transition: 'color 0.3s ease', paddingRight: '4px', paddingTop: '15px' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[index].text}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="d-inline-block pb-2"
                  >
                    {dynamicWords[index].text}
                  </motion.span>
                </AnimatePresence>
              </span>

              {/* O cursor flutuando do lado de fora sem ocupar espaço na centralização */}
              <span 
                className="blinking-cursor position-absolute" 
                style={{ 
                  left: '100%', /* Prende o cursor exatamente no final da palavra */
                  color: dynamicWords[index].color, 
                  transition: 'color 0.3s' 
                }}
              >
                _
              </span>

            </span>
          </h1>

          <p className="hero-copy mx-auto mb-5 fw-medium" style={{ maxWidth: '800px', fontSize: '1.25rem' }}>
            Transformamos problemas complexos em softwares, aplicativos e automações. Uma infraestrutura de ponta para empresas que exigem excelência tecnológica.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <motion.a
              href="/contato"
              className="btn brutalist-btn btn-lg fw-bold px-5 py-3 border-0 text-dark"
              style={{ background: dynamicWords[index].color, transition: 'background 0.3s ease' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              AGENDAR DIAGNÓSTICO
            </motion.a>
            <motion.a
              href="#Servicos"
              className="btn brutalist-btn btn-outline-light btn-lg fw-bold px-5 py-3"
              style={{ borderWidth: '2px' }}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              CONHECER SOLUÇÕES
            </motion.a>
          </div>

        </motion.div>
      </div>

      {/* Marquee com separador via CSS */}
      <div className="hero-marquee-shell position-relative z-1 mt-5 border-top border-bottom" style={{ borderColor: `${dynamicWords[index].color} !important`, transition: 'border-color 0.3s ease' }}>
        <motion.div
          className="hero-marquee-track d-flex align-items-center gap-5 py-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="d-flex align-items-center gap-3 fs-4 fw-bold marquee-separator" style={{ letterSpacing: '2px', color: 'var(--brutal-text)' }}>
              <i className={item.icon1} style={{ fontSize: '1.8rem' }}></i>
              {item.icon2 && <i className={item.icon2} style={{ fontSize: '1.8rem' }}></i>}
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}