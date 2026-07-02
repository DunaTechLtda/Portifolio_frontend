import { useEffect, useRef, useState } from 'react';

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
    <section id="Stats" className="py-5 stats-section" ref={sectionRef}>
      <div className="container">
        <div className="row text-center justify-content-center">
          {/* Item 1 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-people-fill text-white fs-4"></i>
              </div>
              <h3 className="fw-bold mb-0 text-primary">+{users}</h3>
              <p className="mb-0 text-muted">Usuários Impactados</p>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex flex-column align-items-center">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-award-fill text-white fs-4"></i>
              </div>
              <h3 className="fw-bold mb-0 text-primary">{satisfaction}%</h3>
              <p className="mb-0 text-muted">Taxa de Satisfação</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="col-md-4">
            <div className="d-flex flex-column align-items-center">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-clock-fill text-white fs-4"></i>
              </div>
              <h3 className="fw-bold mb-0 text-primary">24/7</h3>
              <p className="mb-0 text-muted">Suporte Contínuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}