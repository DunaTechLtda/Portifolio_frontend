import React from 'react';

export default function Hero() {
  return (
    <section id="Inicio" className="position-relative overflow-hidden pt-5 pb-5">
      {/* Background sutil animado que você já tinha */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}>
        <div className="carousel-item active h-100"></div> 
      </div>

      <div className="container col-xxl-8 px-4 py-5 position-relative z-1">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          
          {/* Lado Direito: Imagem com dinamicidade (Flutuando e com brilho) */}
          <div className="col-10 col-sm-8 col-lg-6 glow-effect">
            <img
              src="/images/assets/Hero1.svg"
              className="d-block mx-lg-auto img-fluid floating-element"
              alt="Soluções digitais Dunatech"
              width="500"
              loading="lazy"
            />
          </div>

          {/* Lado Esquerdo: Textos e Call to Action */}
          <div className="col-lg-6 fade-in">
            <h1 className="display-4 fw-bold text-white lh-1 mb-4">
              Transformamos ideias em <span className="text-primary">soluções digitais</span> sob medida
            </h1>
            <p className="lead text-gray-300 mb-4 opacity-75">
              A Dunatech desenvolve sistemas, aplicações web e sites institucionais 
              que impulsionam empresas de diversos setores. Garanta o máximo desempenho 
              com nossa tecnologia de ponta.
            </p>
            <div className="d-grid gap-3 d-md-flex justify-content-md-start">
              <a href="/contato" className="btn btn-primary btn-lg px-4 me-md-2 shadow-lg">
                <i className="bi bi-rocket-takeoff me-2"></i> Iniciar Projeto
              </a>
              <a href="/portfolio" className="btn btn-outline-light btn-lg px-4">
                <i className="bi bi-eye me-2"></i> Ver Nossos Projetos
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}