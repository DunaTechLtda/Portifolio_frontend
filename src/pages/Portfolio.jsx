import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';
import { motion } from 'framer-motion';

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

export default function Portfolio({ theme, toggleTheme }) {
  return (
    <main className="site-shell min-vh-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="portfolio-fluid-section position-relative py-5">
        <div className="container py-5 position-relative z-1">
          <motion.div
            className="row align-items-end justify-content-between g-4 mb-4 mb-lg-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-lg-7">
              <span className="section-eyebrow">Portfólio</span>
              <h1 className="section-title mt-3 mb-3">Casos que parecem produto e não apenas página entregue.</h1>
              <p className="section-copy mb-0">
                Cada projeto foi apresentado como uma vitrine com profundidade, contraste e leitura rápida para reforçar valor visual e técnico.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="glass-card portfolio-note p-4">
                <div className="portfolio-note-label">Foco</div>
                <div className="portfolio-note-value">Interface forte, narrativa clara e acabamento premium</div>
              </div>
            </div>
          </motion.div>

          <div className="portfolio-bento-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`glass-card portfolio-bento-card ${index === 0 ? 'portfolio-bento-featured' : ''}`}
                key={project.id}
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
              >
                <div className="portfolio-bento-media">
                  <img src={project.img} alt={project.title} className="portfolio-bento-image" />
                  <div className="portfolio-bento-overlay" />
                </div>

                <div className="portfolio-bento-body">
                  <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                    <span className="portfolio-bento-client">{project.client}</span>
                    <span className="portfolio-bento-index">0{index + 1}</span>
                  </div>

                  <h2 className="portfolio-bento-title mb-3">{project.title}</h2>
                  <p className="portfolio-bento-desc mb-4">{project.desc}</p>

                  <div className="portfolio-bento-tags mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="portfolio-chip glass-card">{tag}</span>
                    ))}
                  </div>

                  <a href="/contato" className="portfolio-bento-link d-inline-flex align-items-center gap-2">
                    Quero algo assim <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}