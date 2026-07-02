import React from 'react';

export default function About() {
  return (
    <section id="About" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 glow-effect mb-4 mb-lg-0">
            <div className="text-center">
              <img src="/images/assets/about.svg" alt="Sobre a Dunatech" className="img-fluid rounded floating-element" style={{ maxHeight: '400px' }} />
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3 text-white">Sobre a Dunatech</h2>
            <p className="lead text-muted mb-4">
              Somos uma empresa especializada em desenvolvimento de software, comprometida em transformar ideias em soluções digitais inovadoras.
            </p>
            <p className="mb-4 text-secondary">
              Com foco na excelência técnica e atendimento personalizado, desenvolvemos desde sites institucionais até sistemas complexos de gestão, sempre utilizando as tecnologias mais modernas e práticas de desenvolvimento ágil.
            </p>

            <div className="row g-4 mb-4">
              {[
                { title: "Qualidade Garantida", desc: "Códigos limpos e testados", icon: "bi-check-circle-fill" },
                { title: "Entrega Rápida", desc: "Prazos sempre cumpridos", icon: "bi-lightning-charge-fill" },
                { title: "Segurança", desc: "Proteção de dados garantida", icon: "bi-shield-check" },
                { title: "Suporte 24/7", desc: "Sempre disponíveis", icon: "bi-headset" }
              ].map((item, idx) => (
                <div className="col-6" key={idx}>
                  <div className="d-flex align-items-center">
                    <i className={`bi ${item.icon} text-primary fs-4 me-3`}></i>
                    <div>
                      <strong className="text-white">{item.title}</strong>
                      <p className="mb-0 text-muted small">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="/contato" className="btn btn-primary btn-lg">
              <i className="bi bi-chat-dots me-2"></i>Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}