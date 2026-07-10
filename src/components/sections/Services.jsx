import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Desenvolvimento de Softwares Sob Medida',
    description: 'Desenvolvemos sistemas completos — frontend, backend e banco de dados — criados do zero para atender as necessidades específicas de cada cliente.',
    icon: 'bi-code-square',
    color: '#00E676', // Verde Neon
    cta: 'Saiba Mais',
    href: '/contato',
  },
  {
    title: 'Criação de Sites Institucionais',
    description: 'Desenvolvemos páginas elegantes e funcionais para empresas, profissionais e empreendedores que desejam presença digital com estilo e eficiência.',
    icon: 'bi-globe',
    color: '#4d98e2', // Azul Dunatech
    cta: 'Ver Portfólio',
    href: '/portfolio',
  },
  {
    title: 'Suporte e Manutenção de Sites',
    description: 'Prestamos suporte técnico para sites criados em diversas plataformas, como WordPress, Wix e outras, garantindo desempenho e estabilidade contínua.',
    icon: 'bi-tools',
    color: '#FFEA00', // Amarelo Vibrante
    cta: 'Solicitar Suporte',
    href: '/contato',
  },
];

const containerMotion = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardMotion = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Services() {
  return (
    <section id="Servicos" className="tech-grid-bg pt-4 pt-md-5 pb-5 border-top" style={{ borderColor: 'var(--brutal-border)' }}>
      
      <div className="container pt-1 pt-md-4 pb-5">
        
        <div className="mb-4 mb-md-5 text-center">
          <h2 className="text-huge text-white mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
            NOSSOS SERVIÇOS
          </h2>
        </div>

        <motion.div 
          className="row g-3 g-md-4 justify-content-center"
          variants={containerMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} className="col-lg-4 col-md-6" variants={cardMotion}>
              
              <motion.article
                className="brutal-card-hover h-100 p-3 p-md-4 d-flex flex-column"
                style={{ 
                  '--hover-color': service.color, 
                  border: `2px solid ${service.color}`, 
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `10px 10px 0px rgba(0,0,0,0.1)` 
                }}
              >
                <div className="d-flex justify-content-between align-items-start mb-2 mb-md-4">
                  <i className={`bi ${service.icon}`} style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', color: 'inherit' }} />
                  <span className="fw-bold fs-6 fs-md-5">0{index + 1}</span>
                </div>

                <h3 className="fw-black text-uppercase mb-2 mb-md-3" style={{ fontSize: 'clamp(1rem, 3.5vw, 1.5rem)', letterSpacing: '-1px' }}>
                  {service.title}
                </h3>
                
                <p className="fw-medium mb-3 mb-md-4 flex-grow-1" style={{ opacity: 0.9, fontSize: 'clamp(0.75rem, 2.5vw, 1rem)' }}>
                  {service.description}
                </p>

                <a href={service.href} className="fw-bold text-uppercase text-decoration-none d-flex align-items-center gap-2 mt-auto" style={{ color: 'inherit', letterSpacing: '1px', fontSize: 'clamp(0.75rem, 2.5vw, 1rem)' }}>
                  {service.cta} <i className="bi bi-arrow-right" />
                </a>
              </motion.article>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}