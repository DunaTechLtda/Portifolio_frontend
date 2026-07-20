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
    <section id="Testimonials" className="tech-grid-bg pt-4 pt-md-5 pb-5 border-top" style={{ borderColor: 'var(--brutal-border)' }}>
      <div className="container pt-1 pt-md-4 pb-5 position-relative z-1">
        
        <motion.div
          className="mb-4 mb-md-5 d-flex flex-column align-items-center text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-huge text-white mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
            O QUE DIZEM <br className="d-none d-md-block" /> NOSSOS PARCEIROS
          </h2>
          
          <p className="text-secondary fw-medium px-2" style={{ maxWidth: '600px', fontSize: 'clamp(0.85rem, 3vw, 1.1rem)' }}>
            Empresas e profissionais que confiaram na Dunatech para modernizar e escalar suas operações através de software robusto.
          </p>
        </motion.div>

        <motion.div 
          className="row g-3 g-md-4 justify-content-center mt-2 mt-md-3"
          variants={containerMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonialsData.map((item, index) => (
            <motion.div key={item.id} className="col-lg-4 col-md-6" variants={cardMotion}>
              
              <motion.article
                /* px-3 py-3 deixa o celular bem espremido, p-md-4 devolve o respiro no PC */
                className="brutal-card-hover h-100 px-3 py-3 p-md-4 position-relative d-flex flex-column"
                style={{ 
                  '--hover-color': item.color,
                  border: `2px solid ${item.color}`, 
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `10px 10px 0px rgba(0,0,0,0.1)` 
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

                {/* Margem inferior das estrelas bem reduzida no celular (mb-2) */}
                <div className="mb-2 mb-md-4 d-flex gap-1" style={{ fontSize: 'clamp(0.8rem, 3vw, 1.1rem)', color: 'inherit' }}>
                  {[...Array(item.stars)].map((_, starIndex) => (
                    <i key={starIndex} className="bi bi-star-fill"></i>
                  ))}
                </div>
                
                {/* Margem do texto (mb-3) e espaçamento de linha (1.4) apertados no celular */}
                <p className="fw-medium mb-3 mb-md-5 flex-grow-1" style={{ fontSize: 'clamp(0.8rem, 3vw, 1.05rem)', lineHeight: '1.4' }}>
                  {item.text}
                </p>
                
                {/* Preenchimento superior do rodapé reduzido (pt-2) */}
                <div className="d-flex align-items-center gap-2 gap-md-3 mt-auto pt-2 pt-md-4" style={{ borderTop: '1px dashed currentColor' }}>
                  
                  {/* Ícone cai para 1.5rem no celular */}
                  <i className="bi bi-person-circle" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.8rem)' }}></i>
                  
                  <div>
                    <strong className="d-block text-uppercase" style={{ letterSpacing: '1px', fontSize: 'clamp(0.8rem, 3vw, 1.1rem)' }}>
                      {item.name}
                    </strong>
                    <small className="text-uppercase fw-bold" style={{ opacity: 0.7, letterSpacing: '1px', fontSize: 'clamp(0.65rem, 2vw, 0.85rem)' }}>
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