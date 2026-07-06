import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Marco Almeida",
    company: "SBCP-RN",
    text: '"A plataforma desenvolvida pela Dunatech superou nossas expectativas. Facilitou completamente o gerenciamento dos nossos eventos científicos."',
    stars: 5,
    color: '#00E676' // Verde Neon
  },
  {
    id: 2,
    name: "Dr. João Costa",
    company: "Clínica MARN",
    text: '"O MediSoft revolucionou nossa gestão clínica. O sistema é intuitivo, completo e trouxe uma organização que nunca tivemos."',
    stars: 5,
    color: '#4d98e2' // Azul Dunatech
  },
  {
    id: 3,
    name: "Dra. Ana Beatriz",
    company: "Vimont Odontologia",
    text: '"A Dunatech desenvolveu um site que realmente representa o profissionalismo da minha clínica. O resultado foi muito além do esperado."',
    stars: 5,
    color: '#FFEA00' // Amarelo Vibrante
  }
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

export default function Testimonials() {
  return (
    <section id="Testimonials" className="tech-grid-bg py-5 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
      <div className="container py-5 position-relative z-1">
        
        {/* Cabeçalho Brutalista */}
        <motion.div
          className="mb-5 d-flex flex-column align-items-center text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="eyebrow-box mb-4 text-white">
            <span>[05]</span>
            <div className="eyebrow-divider"></div>
            <span>FEEDBACK_CLIENTES</span>
          </div>
          
          <h2 className="text-huge text-white mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            O QUE DIZEM <br/> NOSSOS PARCEIROS
          </h2>
          
          <p className="text-secondary fw-medium" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
            Empresas e profissionais que confiaram na Dunatech para modernizar e escalar suas operações através de software robusto.
          </p>
        </motion.div>

        {/* Grid de Depoimentos */}
        <motion.div 
          className="row g-4 justify-content-center mt-3"
          variants={containerMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonialsData.map((item, index) => (
            <motion.div key={item.id} className="col-lg-4 col-md-6" variants={cardMotion}>
              <motion.article
                className="h-100 p-4 position-relative d-flex flex-column"
                style={{ 
                  backgroundColor: '#050505', 
                  border: `2px solid ${item.color}`, 
                  color: '#ffffff',
                  transition: 'color 0.2s ease, background-color 0.2s ease'
                }}
                whileHover={{ 
                  backgroundColor: item.color, 
                  color: '#000000',
                  scale: 1.02,
                  boxShadow: `10px 10px 0px rgba(255,255,255,0.1)` 
                }}
              >
                {/* Aspas Gigantes Decorativas no Fundo */}
                <div 
                  className="position-absolute" 
                  style={{ 
                    top: '-10px', 
                    right: '20px', 
                    fontSize: '6rem', 
                    fontFamily: 'Arial Black', 
                    lineHeight: '1', 
                    opacity: 0.15,
                    pointerEvents: 'none'
                  }}
                >
                  "
                </div>

                {/* Estrelas */}
                <div className="mb-4 d-flex gap-1" style={{ fontSize: '1.1rem' }}>
                  {[...Array(item.stars)].map((_, starIndex) => (
                    <i key={starIndex} className="bi bi-star-fill"></i>
                  ))}
                </div>
                
                {/* Texto do Depoimento */}
                <p className="fw-medium mb-5 flex-grow-1" style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>
                  {item.text}
                </p>
                
                {/* Rodapé do Card: Cliente com Ícone de Pessoa */}
                <div className="d-flex align-items-center gap-3 mt-auto pt-4" style={{ borderTop: '1px dashed currentColor' }}>
                  
                  <i className="bi bi-person-circle" style={{ fontSize: '2.8rem' }}></i>
                  
                  <div>
                    <strong className="d-block text-uppercase" style={{ letterSpacing: '1px', fontSize: '1.1rem' }}>
                      {item.name}
                    </strong>
                    <small className="text-uppercase fw-bold" style={{ opacity: 0.7, letterSpacing: '1px' }}>
                      {item.company}
                    </small>
                  </div>

                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}