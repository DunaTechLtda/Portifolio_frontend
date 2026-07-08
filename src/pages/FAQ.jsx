import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';
import { motion } from 'framer-motion';

const faqData = [
  {
    id: "One",
    question: "QUANTO TEMPO LEVA PARA DESENVOLVER UM SOFTWARE PERSONALIZADO?",
    answer: "O tempo de desenvolvimento varia de acordo com a complexidade do projeto. Projetos simples podem levar de 4 a 8 semanas, enquanto sistemas mais complexos podem levar de 3 a 6 meses ou mais. Realizamos uma análise detalhada dos requisitos antes de fornecer um cronograma preciso."
  },
  {
    id: "Two",
    question: "QUAIS TECNOLOGIAS VOCÊS UTILIZAM NO DESENVOLVIMENTO?",
    answer: "Utilizamos as tecnologias mais modernas do mercado, incluindo React, Node.js, Python, .NET, PHP, MySQL, PostgreSQL, MongoDB, entre outras. Escolhemos a stack tecnológica mais adequada para cada projeto, considerando requisitos de performance, escalabilidade e orçamento."
  },
  {
    id: "Three",
    question: "COMO FUNCIONA O PROCESSO DE DESENVOLVIMENTO?",
    answer: "Nosso processo segue metodologias ágeis: 1. Levantamento de requisitos e análise; 2. Planejamento e arquitetura; 3. Desenvolvimento iterativo com entregas parciais; 4. Testes e validação; 5. Implantação e treinamento. Mantemos comunicação constante com o cliente durante todo o processo."
  },
  {
    id: "Four",
    question: "OFERECEM SUPORTE APÓS A ENTREGA DO PROJETO?",
    answer: "Sim, oferecemos suporte técnico e manutenção após a entrega. Incluímos garantia para correção de bugs por 90 dias. Também oferecemos contratos de manutenção mensal para atualizações, melhorias e suporte técnico contínuo."
  },
  {
    id: "Five",
    question: "COMO É CALCULADO O INVESTIMENTO DO PROJETO?",
    answer: "O investimento é calculado com base na complexidade do projeto, tecnologias utilizadas, tempo de desenvolvimento e recursos necessários. Oferecemos orçamentos transparentes com escopo detalhado. Trabalhamos com preço fixo ou por horas, conforme a preferência do cliente."
  },
  {
    id: "Six",
    question: "VOCÊS DESENVOLVEM APLICATIVOS MOBILE?",
    answer: "Sim, desenvolvemos aplicativos mobile nativos (Android/iOS) e híbridos usando React Native e Flutter. Criamos apps completos desde o conceito até a publicação nas lojas, incluindo design de interface e integração com sistemas existentes."
  },
  {
    id: "Seven",
    question: "É POSSÍVEL INTEGRAR COM SISTEMAS EXISTENTES DA EMPRESA?",
    answer: "Absolutamente. Temos experiência em integração com ERPs, CRMs, sistemas de pagamento, APIs de terceiros e bancos de dados legados. Analisamos a arquitetura existente para garantir integração segura e eficiente sem interromper operações em andamento."
  },
  {
    id: "Eight",
    question: "COMO GARANTEM A SEGURANÇA DOS DADOS?",
    answer: "Implementamos as melhores práticas de segurança: criptografia de dados, autenticação robusta, controle de acesso, validação de entrada, backup automático e conformidade com LGPD. Realizamos testes de segurança e auditoria do código para garantir máxima proteção."
  },
  {
    id: "Nine",
    question: "POSSO FAZER ALTERAÇÕES DURANTE O DESENVOLVIMENTO?",
    answer: "Sim, nossa metodologia ágil permite ajustes durante o desenvolvimento. Pequenas alterações são incluídas no escopo, enquanto mudanças significativas são avaliadas separadamente. Mantemos flexibilidade para garantir que o produto final atenda perfeitamente às suas necessidades."
  },
  {
    id: "Ten",
    question: "OFERECEM TREINAMENTO PARA USO DO SISTEMA?",
    answer: "Sim, incluímos treinamento completo no pacote de entrega. Oferecemos sessões presenciais ou remotas para capacitar sua equipe, além de documentação detalhada e vídeos tutoriais. Também fornecemos suporte durante o período de adaptação."
  }
];

export default function FAQ({ theme, toggleTheme }) {
  return (
    <main className="tech-grid-bg min-vh-100">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <section className="position-relative py-5" style={{ paddingTop: '140px' }}>
        <div className="container py-5">
          
          {/* Cabeçalho Brutalista */}
          <motion.div
            className="row align-items-end justify-content-between g-4 mb-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-lg-8">
              <div className="eyebrow-box mb-4 text-white">
                {/* <span>[07]</span>
                <div className="eyebrow-divider"></div>
                <span>BASE DE CONHECIMENTO</span> */}
              </div>
              <h1 className="text-huge text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                PERGUNTAS FREQUENTES<span className="blinking-cursor" style={{ color: '#4d98e2' }}>_</span>
              </h1>
              <p className="text-secondary fw-medium" style={{ fontSize: '1.2rem', maxWidth: '650px' }}>
                Respostas diretas e técnicas sobre nossos processos, prazos e tecnologias. Sem jargões desnecessários, direto ao ponto.
              </p>
            </div>

            <div className="col-lg-4">
              {/* Ajuste de background e borda adaptáveis */}
              <div className="p-4" style={{ border: '1px dashed var(--brutal-border)', backgroundColor: 'var(--brutal-bg)' }}>
                <div className="text-uppercase fw-bold mb-2" style={{ color: '#B388FF', letterSpacing: '2px', fontSize: '0.8rem' }}>
                  // SUPORTE RÁPIDO
                </div>
                <div className="text-white fw-bold fs-6">
                  Se a dúvida for muito específica, a conversa continua no nosso painel de contato.
                </div>
              </div>
            </div>
          </motion.div>

          <div className="row g-5 align-items-start mt-2">
            
            {/* Lista de FAQs (Acordeão) */}
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqAccordion">
                {faqData.map((faq, index) => (
                  <motion.div
                    className="mb-3"
                    key={faq.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    /* Fundo e borda adaptáveis */
                    style={{ backgroundColor: 'var(--brutal-bg)', border: '1px solid var(--brutal-border)' }}
                  >
                    <div className="accordion-item bg-transparent border-0">
                      <h2 className="accordion-header m-0">
                        <button
                          className={`accordion-button bg-transparent shadow-none p-4 d-flex align-items-center gap-3 ${index !== 0 ? 'collapsed' : ''}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${faq.id}`}
                          aria-expanded={index === 0 ? 'true' : 'false'}
                          /* Cor do texto adaptável */
                          style={{ color: 'var(--brutal-text)' }}
                        >
                          {/* Número em destaque */}
                          <span className="fw-black fs-5" style={{ color: '#4d98e2' }}>
                            {index < 9 ? `0${index + 1}` : index + 1}
                          </span>
                          <span className="fw-bold fs-6 text-uppercase flex-grow-1" style={{ letterSpacing: '1px' }}>
                            {faq.question}
                          </span>
                        </button>
                      </h2>
                      <div
                        id={`collapse${faq.id}`}
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        data-bs-parent="#faqAccordion"
                      >
                        {/* Linha divisória adaptável */}
                        <div className="accordion-body p-4 pt-0 text-secondary fw-medium fs-6" style={{ borderTop: '1px dashed var(--brutal-border)' }}>
                          <div className="pt-3">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Painel Lateral */}
            <div className="col-lg-4">
              <motion.aside
                className="d-flex flex-column gap-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Ajuste de background adaptável */}
                <div className="p-4 p-lg-5" style={{ backgroundColor: 'var(--brutal-bg)', border: '2px solid #FFEA00' }}>
                  <span className="text-uppercase fw-bold d-block mb-3" style={{ color: '#FFEA00', letterSpacing: '2px', fontSize: '0.85rem' }}>
                    [!] Ainda em dúvida?
                  </span>
                  
                  <h2 className="text-white text-uppercase fw-black mb-4" style={{ fontSize: '1.8rem', lineHeight: '1.1' }}>
                    VAMOS DESTRAVAR SEU BRIEFING.
                  </h2>
                  
                  <p className="text-secondary fw-medium mb-4">
                    Se sua pergunta não estiver na lista, podemos mapear a necessidade no contato e desenhar a melhor solução de software para você.
                  </p>

                  <div className="d-flex flex-column gap-2 mb-5">
                    <div className="d-flex align-items-center gap-2 text-white fw-bold text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                      <i className="bi bi-check-square-fill" style={{ color: '#00E676' }}></i> Diagnóstico Rápido
                    </div>
                    <div className="d-flex align-items-center gap-2 text-white fw-bold text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                      <i className="bi bi-check-square-fill" style={{ color: '#00E676' }}></i> Escopo Claro
                    </div>
                    <div className="d-flex align-items-center gap-2 text-white fw-bold text-uppercase" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>
                      <i className="bi bi-check-square-fill" style={{ color: '#00E676' }}></i> Resposta Objetiva
                    </div>
                  </div>

                  <a href="/contato" className="btn brutalist-btn w-100 py-3 fw-black text-dark text-uppercase fs-6 d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#FFEA00', border: 'none' }}>
                    INICIAR CONTATO <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </motion.aside>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}