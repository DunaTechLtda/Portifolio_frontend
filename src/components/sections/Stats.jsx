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

  // Array de métricas com as cores vivas atreladas
  const stats = [
    {
      value: `+${users}`,
      label: 'USUÁRIOS IMPACTADOS',
      icon: 'bi-people-fill',
      color: '#00E676', // Verde Neon
    },
    {
      value: `${satisfaction}%`,
      label: 'TAXA DE SATISFAÇÃO',
      icon: 'bi-award-fill',
      color: '#4d98e2', // Azul Dunatech
    },
    {
      value: '24/7',
      label: 'SUPORTE CONTÍNUO',
      icon: 'bi-clock-fill',
      color: '#FFEA00', // Amarelo Vibrante
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
    <section id="Stats" className="tech-grid-bg py-5 border-top" style={{ borderColor: 'rgba(255,255,255,0.1)' }} ref={sectionRef}>
      <div className="container py-5 position-relative z-1">
        
        {/* Cabeçalho Brutalista da Seção */}
        <motion.div
          className="mb-5 d-flex flex-column align-items-center text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
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

        {/* Grid de Cartões Animados */}
        <div className="row g-4 justify-content-center mt-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              className="col-lg-4 col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.article
                className="p-4 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                  backgroundColor: '#050505',
                  border: `2px solid ${item.color}`,
                  color: '#ffffff',
                  transition: 'color 0.2s ease'
                }}
                whileHover={{
                  backgroundColor: item.color,
                  color: '#000000',
                  scale: 1.05,
                  boxShadow: `10px 10px 0px rgba(255,255,255,0.1)`
                }}
              >
                <i className={`bi ${item.icon} mb-3`} style={{ fontSize: '2.5rem' }} />
                
                {/* O Contador com Tipografia Gigante */}
                <div className="fw-black mb-2 text-huge" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: '1', letterSpacing: '-2px' }}>
                  {item.value}
                </div>
                
                <div className="fw-bold text-uppercase" style={{ letterSpacing: '1.5px', opacity: 0.9 }}>
                  {item.label}
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}