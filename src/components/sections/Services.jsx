import React from 'react';

export default function Services() {
  return (
    <section id="Servicos" className="py-5">
      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom border-secondary text-white">Serviços</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 floating-element" style={{ width: '70px', height: '70px', borderRadius: '15px' }}>
              <i className="bi bi-code-square"></i>
            </div>
            <h3 className="fs-4 text-white fw-bold">Desenvolvimento de Softwares Sob Medida</h3>
            <p className="text-muted">
              Desenvolvemos sistemas completos — frontend, backend e banco de dados — criados do zero para atender as necessidades específicas de cada cliente.
            </p>
            <a href="/contato" className="icon-link d-inline-flex align-items-center text-decoration-none">
              Saiba Mais <i className="bi bi-chevron-right ms-1"></i>
            </a>
          </div>

          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 floating-element" style={{ width: '70px', height: '70px', borderRadius: '15px', animationDelay: '1s' }}>
              <i className="bi bi-globe"></i>
            </div>
            <h3 className="fs-4 text-white fw-bold">Criação de Sites Institucionais</h3>
            <p className="text-muted">
              Desenvolvemos páginas elegantes e funcionais para empresas, profissionais e empreendedores que desejam presença digital com estilo e eficiência.
            </p>
            <a href="/portfolio" className="icon-link d-inline-flex align-items-center text-decoration-none">
              Ver Portfólio <i className="bi bi-chevron-right ms-1"></i>
            </a>
          </div>

          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3 floating-element" style={{ width: '70px', height: '70px', borderRadius: '15px', animationDelay: '2s' }}>
              <i className="bi bi-tools"></i>
            </div>
            <h3 className="fs-4 text-white fw-bold">Suporte e Manutenção de Sites</h3>
            <p className="text-muted">
              Prestamos suporte técnico para sites criados em diversas plataformas, como WordPress, Wix e outras, garantindo desempenho e estabilidade contínua.
            </p>
            <a href="/contato" className="icon-link d-inline-flex align-items-center text-decoration-none">
              Solicitar Suporte <i className="bi bi-chevron-right ms-1"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}