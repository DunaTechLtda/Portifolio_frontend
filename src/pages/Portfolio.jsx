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
    tags: ["REACT", "MUI", "NODEJS"],
    client: "SBCP-RN",
    color: "#00E676" // Verde Neon
  },
  {
    id: 2,
    title: "MediSoft",
    desc: "Sistema de gestão hospitalar integrado, oferecendo soluções completas para administração médica e agendamento inteligente.",
    img: "/images/assets/Medisoft_novo.png",
    tags: ["REACT", "POSTGRESQL", "EXPRESS"],
    client: "CLÍNICAS PARCEIRAS",
    color: "#4d98e2" // Azul Dunatech
  },
  {
    id: 3,
    title: "BEATRIZMONTENEGRO.COM.BR",
    desc: "Website corporativo desenvolvido para clínica odontológica especializada, focado em conversão digital e expansão da base de pacientes.",
    img: "/images/assets/beatrizm.png",
    tags: ["HTML5", "CSS3", "JS"],
    client: "DRA. ANA BEATRIZ",
    color: "#FFEA00" // Amarelo Vibrante
  },
  {
    id: 4,
    title: "MEDIDOCS",
    desc: "Aplicação mobile com IA integrada para análise e resumo inteligente de documentos clínicos, otimizando o fluxo de trabalho de profissionais da saúde.",
    img: "/images/assets/MediDocs.jpeg",
    tags: ["REACT NATIVE", "IA", "EXPO"],
    client: "DUNATECH_LABS",
    color: "#B388FF" // Roxo Brilhante
  },
  {
    id: 5,
    title: "MEDISOFT APP",
    desc: "Versão mobile do sistema de gestão hospitalar, garantindo acesso rápido e seguro a informações clínicas de qualquer lugar, com interface nativa e fluida.",
    img: "/images/assets/Medisoft_App.jpeg",
    tags: ["REACT NATIVE", "NODEJS", "FIREBASE"],
    client: "CLÍNICAS PARCEIRAS",
    color: "#4d98e2" // Azul Dunatech
  },
  {
    id: 6,
    title: "VONK'S BARBEARIA",
    desc: "Identidade digital e plataforma de agendamento online desenvolvida para elevar a experiência do cliente, focada em conversão e estilo visual marcante.",
    img: "/images/assets/vonksbarbearia.png",
    tags: ["HTML5", "CSS3", "JS", "UI/UX"],
    client: "VONK'S BARBEARIA",
    color: "#00E676" // Verde Neon
  }
];

// Adicionado theme e toggleTheme para a Navbar funcionar
export default function Portfolio({ theme, toggleTheme }) {
  return (
    <main className="tech-grid-bg min-vh-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="position-relative py-5" style={{ paddingTop: '140px' }}>
        <div className="container py-5">
          
          <motion.div className="mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="eyebrow-box mb-4 text-white">

            </div>
            <h1 className="text-huge text-white mb-4">CASOS DE SUCESSO</h1>
            <p className="text-secondary fw-medium" style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
              Projetos que entregam performance, escalabilidade e design funcional.
            </p>
          </motion.div>

          <div className="row g-4">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="col-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ perspective: 1000 }} // Mantém a perspectiva 3D
              >
                {/* 
                  Aplicada a classe brutal-card-hover e injetado var(--brutal-bg) no background
                */}
                <motion.div 
                  className="brutal-card-hover p-4 d-flex flex-column flex-lg-row align-items-center gap-5"
                  style={{ 
                    '--hover-color': project.color,
                    border: `2px solid ${project.color || 'var(--brutal-border)'}`,
                    transformStyle: 'preserve-3d'
                  }}
                  whileHover={{ 
                    rotateX: 2, 
                    rotateY: -2, 
                    scale: 1.01,
                    boxShadow: `10px 10px 0px ${project.color}33` 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Imagem */}
                  <div className="flex-shrink-0" style={{ width: '100%', maxWidth: (project.id === 4 || project.id === 5) ? '220px' : '400px' }}>
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-100 img-fluid" 
                      style={{ border: '2px solid var(--brutal-text)', objectFit: 'contain' }} 
                    />
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-grow-1">
                    <span className="d-block fw-bold mb-2" style={{ color: project.color, letterSpacing: '2px' }}>
                      {project.client}
                    </span>
                    {/* Classes text-white fixas removidas, agora os textos herdam a cor do modo (claro/escuro) */}
                    <h2 className="text-uppercase fw-black mb-3" style={{ fontSize: '2rem' }}>
                      {project.title}
                    </h2>
                    <p className="mb-4" style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                      {project.desc}
                    </p>
                    
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 fw-bold text-dark bg-white" style={{ fontSize: '0.75rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a href="/contato" className="fw-bold text-decoration-none d-flex align-items-center gap-2" style={{ color: 'inherit' }}>
                      SOLICITAR ORÇAMENTO <i className="bi bi-arrow-right" style={{ color: project.color }}></i>
                    </a>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}