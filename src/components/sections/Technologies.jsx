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
    <section id="Technologies" className="tech-grid-bg pt-4 pt-md-5 pb-5 border-top" style={{ borderColor: 'var(--brutal-border)' }}>
      <div className="container pt-1 pt-md-4 pb-5">
        
        <motion.div
          className="mb-4 mb-md-5 d-flex flex-column align-items-center text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
        >
          <h2 className="text-huge text-white mb-3" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
            TECNOLOGIAS QUE DOMINAMOS
          </h2>
          <p className="text-secondary fw-medium px-2" style={{ maxWidth: '600px', fontSize: 'clamp(0.85rem, 3vw, 1.1rem)' }}>
            Utilizamos as ferramentas mais modernas e confiáveis do mercado para criar soluções robustas e escaláveis.
          </p>
        </motion.div>

        <div className="row g-3 g-md-4">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="col-lg-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <article className="p-3 p-md-4 h-100" style={{ backgroundColor: 'var(--brutal-bg)', border: '1px solid var(--brutal-border)' }}>
                <div className="d-flex align-items-center gap-2 gap-md-3 mb-3 mb-md-4 pb-2 pb-md-3" style={{ borderBottom: '1px dashed var(--brutal-border)' }}>
                  <i className={`bi ${group.icon}`} style={{ fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', color: group.color }} />
                  <h3 className="text-white text-uppercase fw-bold m-0" style={{ letterSpacing: '1px', fontSize: 'clamp(1.1rem, 3.5vw, 1.5rem)' }}>
                    {group.title}
                  </h3>
                </div>

                {/* Margem menor entre as tags no mobile com gap-1 gap-md-2 */}
                <div className="d-flex flex-wrap gap-1 gap-md-2">
                  {group.items.map((tech) => (
                    <motion.span 
                      key={tech} 
                      /* py-1 no celular, py-2 no PC */
                      className="tech-tag-logo py-1 py-md-2 text-uppercase fw-bold"
                      style={{ 
                        fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)', 
                        color: 'var(--brutal-bg)', 
                        backgroundColor: 'var(--brutal-text)' 
                      }}
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