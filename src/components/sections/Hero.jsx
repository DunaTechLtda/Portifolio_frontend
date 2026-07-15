import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dynamicWords = [
  { text: "ROBUSTAS", color: "#4d98e2" }, 
  { text: "OTIMIZADAS", color: "#00E676" },    
  { text: "CRIATIVAS", color: "#FFEA00" },
  { text: "ESCALÁVEIS", color: "#B388FF" },
  { text: "INOVADORAS", color: "#ff8888" }
];

const marqueeItems = [
  { text: 'REACT', icon1: 'devicon-react-original colored' },
  { text: 'NODE.JS', icon1: 'devicon-nodejs-plain-wordmark colored' },
  { text: 'PYTHON', icon1: 'devicon-python-plain colored' },
  { text: 'UI/UX', icon1: 'devicon-figma-plain colored' },
  { text: 'MOBILE', icon1: 'devicon-android-plain colored', icon2: 'devicon-apple-original' }, 
  { text: 'CLOUD', icon1: 'devicon-amazonwebservices-plain-wordmark colored' },
  { text: 'IA', icon1: 'devicon-tensorflow-original colored' }, 
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
    <section id="Inicio" className="hero-fluid-section overflow-hidden d-flex flex-column justify-content-center" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      
      <style>{`
        @media (max-width: 768px) {
          .hero-fluid-section {
            padding-top: 65px !important; 
          }
          .text-titan {
            font-size: clamp(1.6rem, 11vw, 3.5rem) !important;
            line-height: 1.1 !important;
          }
        }
      `}</style>

      <div className="hero-glow hero-glow-blue"></div>
      <div className="hero-glow hero-glow-violet"></div>
      <div className="hero-grid-mask"></div>
      <div className="hero-grid-perspective"></div>

      <div className="container position-relative z-1 flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center px-3">
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-100">
          
          {/* mb-4 no mobile, travado em mb-md-4 no PC */}
          <div className="hero-kicker glass-card d-inline-flex align-items-center gap-2 px-3 py-1 py-md-2 mb-4 mb-md-4 fw-bold" style={{ letterSpacing: '1px', border: `1px solid ${dynamicWords[index].color}`, transition: 'border-color 0.3s', fontSize: 'clamp(0.6rem, 2vw, 0.75rem)' }}>
            <span>DUNATECH</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: dynamicWords[index].color, transition: 'background 0.3s' }}></span>
            <span>SOFTWARE_HOUSE</span>
          </div>
          
          {/* mb-5 para dar um respiro grande abaixo do título no celular, travado em mb-md-4 no PC */}
          <h1 className="text-titan mb-5 mb-md-4 text-uppercase">
            <span className="d-block d-md-inline">SOLUÇÕES</span>{' '}
            <span className="d-block d-md-inline">DIGITAIS</span>
            
            <span className="d-inline-flex align-items-center justify-content-center mx-auto mt-0" style={{ maxWidth: '100%' }}>
              <span className="overflow-hidden" style={{ 
                color: dynamicWords[index].color, 
                transition: 'color 0.3s ease', 
                paddingLeft: 'clamp(15px, 3vw, 35px)',
                paddingRight: 'clamp(15px, 3vw, 35px)', 
                paddingTop: 'clamp(15px, 5vw, 50px)', 
                paddingBottom: 'clamp(10px, 3vw, 30px)' 
              }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[index].text}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="d-inline-block"
                    style={{ whiteSpace: 'nowrap' }} 
                  >
                    {dynamicWords[index].text}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="blinking-cursor" style={{ color: dynamicWords[index].color, transition: 'color 0.3s' }}>_</span>
            </span>
          </h1>

          {/* mb-5 no celular, travado em mb-md-5 no PC */}
          <p className="hero-copy mx-auto mb-5 mb-md-5 fw-medium px-2" style={{ maxWidth: '800px', fontSize: 'clamp(0.85rem, 3.5vw, 1.25rem)' }}>
            Transformamos problemas complexos em softwares, aplicativos e automações. Uma infraestrutura de ponta para empresas que exigem excelência tecnológica.
          </p>

          {/* gap-4 no celular para distanciar os botões, travado em gap-md-4 no PC */}
          <div className="d-grid d-md-flex justify-content-md-center gap-4 gap-md-4 mx-auto w-100 px-3 px-md-0" style={{ maxWidth: '800px' }}>
            
            <motion.a
              href="/contato"
              className="btn btn-logo-both brutalist-btn fw-bold border-0 text-dark d-flex align-items-center justify-content-center w-100"
              style={{ 
                background: dynamicWords[index].color, 
                transition: 'background 0.3s ease',
                height: 'clamp(46px, 10vw, 64px)', 
                fontSize: 'clamp(0.75rem, 3vw, 1rem)', 
                letterSpacing: '1px'
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              AGENDAR DIAGNÓSTICO
            </motion.a>
            
            <motion.a
              href="#Servicos"
              className="btn btn-logo-both btn-logo-outline brutalist-btn fw-bold border-0 d-flex align-items-center justify-content-center w-100"
              style={{ 
                color: 'var(--brutal-text)',
                height: 'clamp(46px, 10vw, 64px)',
                fontSize: 'clamp(0.75rem, 3vw, 1rem)',
                letterSpacing: '1px'
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              CONHECER SOLUÇÕES
            </motion.a>

          </div>

        </motion.div>
      </div>

      <div className="hero-marquee-shell position-relative z-1 mt-4 mt-md-5 border-top border-bottom" style={{ borderColor: `${dynamicWords[index].color} !important`, transition: 'border-color 0.3s ease' }}>
        <motion.div
          className="hero-marquee-track d-flex align-items-center gap-4 gap-md-5 py-2 py-md-3"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="d-flex align-items-center gap-2 gap-md-3 fs-6 fs-md-4 fw-bold marquee-separator" style={{ letterSpacing: '1px', color: 'var(--brutal-text)' }}>
              <i className={item.icon1} style={{ fontSize: '1.2rem' }}></i>
              {item.icon2 && <i className={item.icon2} style={{ fontSize: '1.2rem' }}></i>}
              {item.text}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}