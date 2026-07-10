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
          className="mb-4 mb-md-5 d-flex flex-column align-items-center text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-huge text-white mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
            RESULTADOS COMPROVADOS
          </h2>
          <p className="text-secondary fw-medium px-2" style={{ maxWidth: '600px', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
            Não entregamos apenas código. Entregamos plataformas que escalam operações, retêm clientes e funcionam ininterruptamente.
          </p>
        </motion.div>

        {/* Grid de Cards */}
        <div className="row g-3 g-md-4">
          {statsData.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="col-lg-4 col-md-6" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: index * 0.1 }}
            >
              <motion.article
                // MUDANÇA AQUI: p-4 no celular (mais achatado), p-lg-5 no PC (tamanho original)
                className="brutal-card-hover h-100 p-4 p-lg-5 d-flex flex-column align-items-center justify-content-center text-center"
                style={{
                  '--hover-color': stat.color, 
                  border: `2px solid ${stat.color}`
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: `10px 10px 0px rgba(0,0,0,0.1)`
                }}
              >
                {/* Margem do ícone reduzida no mobile */}
                <i className={`bi ${stat.icon} mb-2 mb-md-3`} style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', color: 'inherit' }}></i>
                
                {/* Fonte dinâmica com clamp para o número não estourar a altura */}
                <h3 className="fw-black mb-1" style={{ fontSize: 'clamp(2.5rem, 8vw, 3.5rem)', letterSpacing: '-2px' }}>
                  {stat.value}
                </h3>
                
                <span className="fw-bold text-uppercase" style={{ letterSpacing: '1px', fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)' }}>
                  {stat.label}
                </span>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}