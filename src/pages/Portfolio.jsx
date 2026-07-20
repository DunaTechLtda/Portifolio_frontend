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

export default function Portfolio({ theme, toggleTheme }) {
  return (
    <main className="tech-grid-bg min-vh-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="position-relative pb-5" style={{ paddingTop: 'clamp(90px, 15vw, 140px)' }}>
        <div className="container pt-2 pt-md-4 pb-5">
          
          <motion.div className="mb-4 mb-md-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="eyebrow-box mb-3 mb-md-4 text-white">

            </div>
            <h1 className="text-huge text-white mb-3" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>CASOS DE SUCESSO</h1>
            <p className="text-secondary fw-medium px-2 px-md-0" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', maxWidth: '600px' }}>
              Projetos que entregam performance, escalabilidade e design funcional.
            </p>
          </motion.div>

          <div className="row g-3 g-md-4">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="col-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                style={{ perspective: 1000 }} 
              >
                <motion.div 
                  className="brutal-card-hover px-3 py-3 p-lg-4 d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-5"
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
                  {/* IMAGEM: O clamp(130px, 40vw, 220px) faz os apps ficarem menores no celular e voltarem a 220px no PC */}
                  <div 
                    className="flex-shrink-0" 
                    style={{ 
                      width: '100%', 
                      maxWidth: (project.id === 4 || project.id === 5) ? 'clamp(130px, 40vw, 220px)' : '400px' 
                    }}
                  >
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-100 img-fluid" 
                      style={{ border: '2px solid var(--brutal-text)', objectFit: 'contain' }} 
                    />
                  </div>

                  <div className="flex-grow-1 w-100 mt-2 mt-lg-0">
                    <span className="d-block fw-bold mb-1 mb-md-2" style={{ color: project.color, letterSpacing: '2px', fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)' }}>
                      {project.client}
                    </span>
                    
                    <h2 className="text-uppercase fw-black mb-2 mb-md-3 text-break" style={{ fontSize: 'clamp(1.3rem, 5vw, 2rem)' }}>
                      {project.title}
                    </h2>
                    
                    <p className="mb-3 mb-md-4" style={{ fontSize: 'clamp(0.85rem, 3vw, 1.1rem)', opacity: 0.8, lineHeight: '1.4' }}>
                      {project.desc}
                    </p>
                    
                    <div className="d-flex flex-wrap gap-1 gap-md-2 mb-3 mb-md-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 px-md-3 fw-bold text-dark bg-white" style={{ fontSize: 'clamp(0.65rem, 2vw, 0.75rem)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href="/contato"
                      className="btn btn-logo-both btn-logo-outline brutalist-btn px-3 py-2 px-md-4 fw-bold d-inline-flex align-items-center justify-content-center gap-2 border-0"
                      style={{
                        color: 'var(--brutal-text)',
                        fontSize: 'clamp(0.75rem, 3vw, 0.85rem)',
                        letterSpacing: '1px'
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      SOLICITAR ORÇAMENTO <i className="bi bi-arrow-right" style={{ color: project.color, fontSize: '1.1rem' }}></i>
                    </motion.a>
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