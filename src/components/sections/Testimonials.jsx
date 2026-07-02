import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Marco Almeida",
    company: "SBCP-RN",
    text: '"A plataforma desenvolvida pela Dunatech superou nossas expectativas. Facilitou completamente o gerenciamento dos nossos eventos científicos."',
    stars: 5
  },
  {
    id: 2,
    name: "Dr. João Costa",
    company: "Clínica MARN",
    text: '"O MediSoft revolucionou nossa gestão clínica. O sistema é intuitivo, completo e trouxe uma organização que nunca tivemos."',
    stars: 5
  },
  {
    id: 3,
    name: "Dra. Ana Beatriz",
    company: "Vimont Odontologia",
    text: '"A Dunatech desenvolveu um site que realmente representa o profissionalismo da minha clínica. O resultado foi muito além do esperado."',
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="Testimonials" className="py-5">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="fw-bold text-white">O que Nossos Clientes Dizem</h2>
            <p className="lead text-muted">
              Depoimentos reais de empresários que confiaram em nossas soluções
            </p>
          </div>
        </div>

        <div className="row g-4">
          {testimonialsData.map((item) => (
            <div className="col-md-6 col-lg-4" key={item.id}>
              {/* Note que adicionei a classe shadow-lg e border-secondary para dar o visual premium do print */}
              <div className="card border-secondary bg-dark text-white shadow-lg h-100 transition-card">
                <div className="card-body text-center p-4">
                  <div className="text-warning mb-3">
                    {[...Array(item.stars)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill me-1"></i>
                    ))}
                  </div>
                  <p className="card-text mb-4 opacity-75">
                    {item.text}
                  </p>
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                      <i className="bi bi-person-fill text-white"></i>
                    </div>
                    <div className="text-start">
                      <strong className="text-white">{item.name}</strong><br />
                      <small className="text-muted">{item.company}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}