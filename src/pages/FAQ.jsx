import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';

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

      <section className="py-5 glow-effect">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-12">
              <h1 className="display-4 fw-bold text-white mb-3">Perguntas Frequentes</h1>
              <p className="lead text-muted">
                Encontre respostas para as principais dúvidas sobre nossos serviços
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion accordion-flush bg-dark" id="faqAccordion">
                {faqData.map((faq, index) => (
                  <div className="accordion-item bg-dark border-secondary mb-3 rounded shadow-sm" key={faq.id}>
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button bg-dark text-white fw-bold ${index !== 0 ? 'collapsed' : ''}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${faq.id}`} 
                        aria-expanded={index === 0 ? "true" : "false"}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div 
                      id={`collapse${faq.id}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-muted">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CTA Reutilizável */}
      <section className="py-5 bg-primary bg-gradient">
        <div className="container text-center">
          <h2 className="fw-bold text-white mb-3">Não encontrou sua pergunta?</h2>
          <p className="lead text-white opacity-75 mb-4">
            Nossa equipe está pronta para esclarecer todas as suas dúvidas.
          </p>
          <a href="/contato" className="btn btn-light btn-lg px-5 shadow-lg">
            Entre em Contato
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}