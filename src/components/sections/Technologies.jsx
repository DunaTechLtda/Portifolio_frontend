import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Frontend',
    icon: 'bi-code-slash',
    color: '#00E676',
    items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: 'bi-server',
    color: '#4d98e2',
    items: ['Node.js', 'Python', 'PHP', 'Express', '.NET'],
  },
  {
    title: 'Banco de Dados',
    icon: 'bi-database',
    color: '#FFEA00',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Cloud & Ferramentas',
    icon: 'bi-cloud',
    color: '#B388FF', // Roxo Brilhante
    items: ['AWS', 'Docker', 'Git', 'Figma'],
  },
];

export default function Technologies() {
  return (
    <section id="Technologies" className="tech-grid-bg py-5 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
      <div className="container py-5">
        
        <motion.div
          className="mb-5 d-flex flex-column align-items-center text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="eyebrow-box mb-4 text-white">
            <span>[03]</span>
            <div className="eyebrow-divider"></div>
            <span>TECH_STACK</span>
          </div>
          <h2 className="text-huge text-white mb-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            TECNOLOGIAS QUE DOMINAMOS
          </h2>
          <p className="text-secondary fw-medium" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
            Utilizamos as ferramentas mais modernas e confiáveis do mercado para criar soluções robustas e escaláveis.
          </p>
        </motion.div>

        <div className="row g-4">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="col-lg-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <article className="p-4 h-100" style={{ backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="d-flex align-items-center gap-3 mb-4 pb-3" style={{ borderBottom: '1px dashed rgba(255,255,255,0.2)' }}>
                  <i className={`bi ${group.icon}`} style={{ fontSize: '1.8rem', color: group.color }} />
                  <h3 className="text-white text-uppercase fw-bold m-0" style={{ letterSpacing: '1px' }}>
                    {group.title}
                  </h3>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <motion.span 
                      key={tech} 
                      className="px-3 py-2 text-uppercase fw-bold"
                      style={{ fontSize: '0.85rem', color: '#000', backgroundColor: '#fff' }}
                      whileHover={{ backgroundColor: group.color, scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}