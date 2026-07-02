import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';
import { motion } from 'framer-motion';

const faqData = [
  {
    id: "One",
    question: "Quanto tempo leva para desenvolver um software personalizado?",
    answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Projetos simples podem levar de 4 a 8 semanas, enquanto sistemas mais complexos podem levar de 3 a 6 meses ou mais. Realizamos uma análise detalhada dos requisitos antes de fornecer um cronograma preciso."
  },
  {
    id: "Two",
    question: "Quais tecnologias vocês utilizam no desenvolvimento?",
    answer: "Utilizamos as tecnologias mais modernas do mercado, incluindo React, Node.js, Python, .NET, PHP, MySQL, PostgreSQL, MongoDB, entre outras. Escolhemos a stack tecnológica mais adequada para cada projeto, considerando requisitos de performance, escalabilidade e orçamento."
  },
  {
    id: "Three",
    question: "Como funciona o processo de desenvolvimento?",
    answer: "Nosso processo segue metodologias ágeis: Levantamento de requisitos, planejamento, desenvolvimento iterativo, testes e implantação. Mantemos comunicação constante com o cliente durante todo o processo."
  },
  {
    id: "Four",
    question: "Oferecem suporte após a entrega do projeto?",
    answer: "Sim, oferecemos suporte técnico e manutenção após a entrega. Incluímos garantia para correção de bugs por 90 dias. Também oferecemos contratos de manutenção mensal para atualizações e suporte contínuo."
  },
  {
    id: "Five",
    question: "Vocês desenvolvem aplicativos mobile?",
    answer: "Sim, desenvolvemos aplicativos mobile nativos (Android/iOS) e híbridos usando React Native e Flutter. Criamos apps completos desde o conceito até a publicação nas lojas."
  }
];

export default function FAQ() {
  return (
    <main className="bg-dark text-white min-vh-100">
      <Navbar />

      <section className="faq-fluid-section position-relative py-5">
        <div className="container py-5 position-relative z-1">
          <motion.div
            className="row align-items-end justify-content-between g-4 mb-4 mb-lg-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-lg-7">
              <span className="section-eyebrow">FAQs</span>
              <h1 className="section-title mt-3 mb-3">Respostas organizadas com leitura limpa e visual premium.</h1>
              <p className="section-copy mb-0">
                A experiência aqui foi desenhada para parecer uma central de conhecimento viva, com cards, vidro fosco e foco em clareza.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="glass-card faq-note p-4">
                <div className="faq-note-label">Ajuda rápida</div>
                <div className="faq-note-value">Se a dúvida for mais específica, a conversa continua no contato.</div>
              </div>
            </div>
          </motion.div>

          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <div className="faq-accordion-stack" id="faqAccordion">
                {faqData.map((faq, index) => (
                  <motion.div
                    className="glass-card faq-item-card"
                    key={faq.id}
                    initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.22 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                  >
                    <div className="accordion accordion-flush" id={`faqGroup-${faq.id}`}>
                      <div className="accordion-item faq-accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className={`accordion-button faq-accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${faq.id}`}
                            aria-expanded={index === 0 ? 'true' : 'false'}
                          >
                            <span className="faq-question-index">0{index + 1}</span>
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${faq.id}`}
                          className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body faq-accordion-body">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <motion.aside
                className="glass-card faq-side-panel p-4 p-lg-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -6 }}
              >
                <span className="faq-side-eyebrow">Ainda em dúvida?</span>
                <h2 className="faq-side-title mt-3 mb-3">Vamos destravar seu briefing com rapidez.</h2>
                <p className="faq-side-copy">
                  Se sua pergunta não estiver na lista, podemos mapear a necessidade no contato e desenhar a melhor solução.
                </p>
                <div className="faq-side-points">
                  <span>Diagnóstico rápido</span>
                  <span>Escopo claro</span>
                  <span>Resposta objetiva</span>
                </div>
                <a href="/contato" className="btn btn-primary btn-lg tech-cta-primary w-100 mt-4">
                  Entrar em contato
                </a>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}