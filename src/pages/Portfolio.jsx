import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';

const projects = [
  {
    id: 1,
    title: "SBCP-RN",
    desc: "Plataforma web institucional desenvolvida para a Sociedade Brasileira de Cirurgia Plástica do Rio Grande do Norte, otimizando o processo de gestão e inscrições.",
    img: "/images/assets/sbcp.png",
    tags: ["React", "MUI", "NodeJS"],
    client: "SBCP-RN"
  },
  {
    id: 2,
    title: "MediSoft",
    desc: "Sistema de gestão hospitalar integrado, oferecendo soluções completas para administração médica e agendamento inteligente.",
    img: "/images/assets/Medisoft.jpeg",
    tags: ["React", "PostgreSQL", "Express"],
    client: "Clínicas Parceiras"
  },
  {
    id: 3,
    title: "beatrizmontenegro.com.br",
    desc: "Website corporativo desenvolvido para clínica odontológica especializada, focado em conversão digital e expansão da base de pacientes.",
    img: "/images/assets/beatrizm.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    client: "Dra. Ana Beatriz"
  }
];

export default function Portfolio() {
  return (
    <main className="bg-dark text-white min-vh-100">
      <Navbar />

      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-5 fw-bold text-white mb-3">Resultados que Falam por Si</h1>
              <p className="lead text-muted">Confira os projetos e soluções digitais que já geraram impacto real.</p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            {projects.map(project => (
              <div className="col-12 col-md-6 col-lg-4 portfolio-item" key={project.id}>
                <div className="card border-secondary bg-dark text-white shadow-lg h-100 transition-card">
                  <div className="position-relative overflow-hidden rounded-top">
                    <img
                      src={project.img}
                      className="card-img-top"
                      alt={project.title}
                      style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                  </div>
                  <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title fw-bold mb-3">{project.title}</h5>
                    <p className="card-text text-muted mb-4 flex-grow-1">{project.desc}</p>
                    <div className="mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50 me-1">{tag}</span>
                      ))}
                    </div>
                    <small className="text-muted border-top border-secondary pt-3 mt-auto">
                      Cliente: {project.client}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}