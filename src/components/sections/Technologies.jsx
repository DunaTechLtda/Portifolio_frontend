import React from 'react';
import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Frontend',
    icon: 'bi-code-slash',
    items: ['React', 'Vite', 'HTML5', 'CSS3', 'Bootstrap 5'],
  },
  {
    title: 'Backend',
    icon: 'bi-server',
    items: ['Node.js', 'Python', 'Express', '.NET', 'APIs'],
  },
  {
    title: 'Dados',
    icon: 'bi-database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Cloud & Workflow',
    icon: 'bi-cloud',
    items: ['AWS', 'Docker', 'Git', 'Figma', 'Deploy'],
  },
];

export default function Technologies() {
  return (
    <section id="Technologies" className="tech-stack-section position-relative py-5">
      <div className="container py-5 position-relative z-1">
        <motion.div
          className="row justify-content-between align-items-end g-4 mb-4 mb-lg-5"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="col-lg-7">
            <span className="section-eyebrow">Stack</span>
            <h2 className="section-title mt-3 mb-3">Tecnologias organizadas como uma matriz visual de produto.</h2>
            <p className="section-copy mb-0">
              A apresentação deixa de ser lista de badges e passa a funcionar como uma vitrine de capacidades técnicas, com blocos mais densos e atmosfera de dashboard.
            </p>
          </div>
        </motion.div>

        <div className="tech-matrix-grid">
          {groups.map((group, index) => (
            <motion.article
              key={group.title}
              className={`glass-card tech-matrix-card tech-matrix-card-${index + 1}`}
              initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="tech-matrix-header mb-4">
                <div className="tech-matrix-icon">
                  <i className={`bi ${group.icon}`} />
                </div>
                <h3 className="tech-matrix-title mb-0">{group.title}</h3>
              </div>

              <div className="tech-chip-list">
                {group.items.map((tech) => (
                  <span key={tech} className="tech-chip glass-card">{tech}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}