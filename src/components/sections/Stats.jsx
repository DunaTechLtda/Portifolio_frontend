import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const animateCounter = (setCount, target) => {
  let current = 0;
  const increment = target / 60;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      setCount(target);
      clearInterval(timer);
    } else {
      setCount(Math.floor(current));
    }
  }, 16);
};

export default function Stats() {
  const [users, setUsers] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const sectionRef = useRef(null);

  const stats = [
    {
      value: `+${users}`,
      label: 'Usuários impactados',
      icon: 'bi-people-fill',
      accent: 'stats-accent-blue',
    },
    {
      value: `${satisfaction}%`,
      label: 'Taxa de satisfação',
      icon: 'bi-award-fill',
      accent: 'stats-accent-violet',
    },
    {
      value: '24/7',
      label: 'Suporte contínuo',
      icon: 'bi-clock-fill',
      accent: 'stats-accent-soft',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          animateCounter(setUsers, 1200);
          animateCounter(setSatisfaction, 100);
          observer.disconnect(); // Para a animação rodar só uma vez
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Stats" className="stats-fluid-section position-relative py-5" ref={sectionRef}>
      <div className="container py-5 position-relative z-1">
        <motion.div
          className="row justify-content-between align-items-end g-4 mb-4"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="col-lg-7">
            <span className="section-eyebrow">Métricas</span>
            <h2 className="section-title mt-3 mb-3">Prova social com leitura rápida e presença visual mais forte.</h2>
            <p className="section-copy mb-0">
              Em vez de números soltos, as métricas aparecem como blocos de informação com profundidade, reforçando consistência e credibilidade.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="glass-card stats-note p-4">
              <div className="stats-note-label">Performance</div>
              <div className="stats-note-value">Animação contínua + leitura editorial</div>
            </div>
          </div>
        </motion.div>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <motion.article
              key={item.label}
              className="glass-card stats-card"
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <span className={`stats-card-glow ${item.accent}`} />
              <div className="stats-card-icon">
                <i className={`bi ${item.icon}`} />
              </div>
              <div className="stats-card-value">{item.value}</div>
              <div className="stats-card-label">{item.label}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}