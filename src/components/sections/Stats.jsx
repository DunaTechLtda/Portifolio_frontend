import React from 'react';
import { motion } from 'framer-motion';

const statsData = [
  {
    id: 1,
    value: "+1200",
    label: "USUÁRIOS IMPACTADOS",
    icon: "bi-people-fill",
    color: "#00E676" // Verde Neon
  },
  {
    id: 2,
    value: "100%",
    label: "TAXA DE SATISFAÇÃO",
    icon: "bi-award-fill",
    color: "#4d98e2" // Azul Dunatech
  },
  {
    id: 3,
    value: "24/7",
    label: "SUPORTE CONTÍNUO",
    icon: "bi-clock-fill",
    color: "#FFEA00" // Amarelo Vibrante
  }
];

export default function Stats() {
  return (
    <section id="Stats" className="tech-grid-bg py-5 border-top" style={{ borderColor: 'var(--brutal-border)' }}>
      <div className="container py-5">
        
        {/* Cabeçalho */}
        <motion.div
          className="mb-5 d-flex flex-column align-items-center text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow-box mb-4 text-white">
            <span>[01]</span>
            <div className="eyebrow-divider"></div>
            <span>MÉTRICAS_DE_IMPACTO</span>
          </div>
          <h2 className="text-huge text-white mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            RESULTADOS COMPROVADOS
          </h2>
          <p className="text-secondary fw-medium" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
            Não entregamos apenas código. Entregamos plataformas que escalam operações, retêm clientes e funcionam ininterruptamente.
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="row g-4">
          {statsData.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="col-lg-4 col-md-6" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }}
            >
              {/* Aplicamos a classe brutal-card-hover e injetamos a cor via CSS */}
              <motion.article
                className="brutal-card-hover h-100 p-5 d-flex flex-column align-items-center justify-content-center text-center"
                style={{
                  '--hover-color': stat.color, // CSS vai usar isso no modo escuro
                  border: `2px solid ${stat.color}`
                }}
                whileHover={{
                  scale: 1.03, // Mantém apenas o efeito 3D/Zoom no Framer Motion
                  boxShadow: `10px 10px 0px rgba(0,0,0,0.1)`
                }}
              >
                <i className={`bi ${stat.icon} mb-3`} style={{ fontSize: '2rem', color: 'inherit' }}></i>
                <h3 className="fw-black mb-1" style={{ fontSize: '3.5rem', letterSpacing: '-2px' }}>{stat.value}</h3>
                <span className="fw-bold text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>{stat.label}</span>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}