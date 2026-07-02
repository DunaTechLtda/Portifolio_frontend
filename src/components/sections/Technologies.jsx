import React from 'react';

export default function Technologies() {
  return (
    <section id="Technologies" className="py-5 bg-dark bg-gradient">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold text-white">Tecnologias que Dominamos</h2>
            <p className="lead text-muted">
              Utilizamos as ferramentas mais modernas e confiáveis do mercado para criar soluções robustas e escaláveis
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="text-center p-4 border border-secondary rounded-3 h-100 bg-dark bg-opacity-50 transition-card">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-code-slash text-white fs-4"></i>
              </div>
              <h5 className="fw-bold text-white">Frontend</h5>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {['React', 'Vue.js', 'HTML5', 'CSS3', 'Bootstrap'].map(tech => (
                  <span key={tech} className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="text-center p-4 border border-secondary rounded-3 h-100 bg-dark bg-opacity-50 transition-card">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-server text-white fs-4"></i>
              </div>
              <h5 className="fw-bold text-white">Backend</h5>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {['Node.js', 'Python', 'PHP', 'Express', '.NET'].map(tech => (
                  <span key={tech} className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="text-center p-4 border border-secondary rounded-3 h-100 bg-dark bg-opacity-50 transition-card">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-database text-white fs-4"></i>
              </div>
              <h5 className="fw-bold text-white">Banco de Dados</h5>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'].map(tech => (
                  <span key={tech} className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="text-center p-4 border border-secondary rounded-3 h-100 bg-dark bg-opacity-50 transition-card">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <i className="bi bi-cloud text-white fs-4"></i>
              </div>
              <h5 className="fw-bold text-white">Cloud & Ferramentas</h5>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                {['AWS', 'Docker', 'Git', 'Figma'].map(tech => (
                  <span key={tech} className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}