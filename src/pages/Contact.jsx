import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';

export default function Contact({ theme, toggleTheme }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    inputFirstName: '',
    inputLastName: '',
    inputEmail: '',
    inputPhone: '',
    inputMessage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailData = {
      from_name: formData.inputFirstName,
      from_lastname: formData.inputLastName,
      from_email: formData.inputEmail,
      from_phone: formData.inputPhone,
      message: formData.inputMessage,
      current_date: new Date().toLocaleString('pt-BR')
    };

    // Pegando as chaves seguras do arquivo .env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Disparando o email com as variáveis de ambiente
    emailjs.send(serviceID, templateID, emailData, publicKey)
      .then(() => {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        setFormData({
          inputFirstName: '', inputLastName: '', inputEmail: '', inputPhone: '', inputMessage: ''
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-lg-8">
              <div className="eyebrow-box mb-4 text-white">
                {/* <span>[08]</span>
                <div className="eyebrow-divider"></div>
                <span>INICIAR PROJETO</span> */}
              </div>
              
              {/* Título com quebra de linha e espaçamento ajustado para igualar a imagem */}
              <h1 className="text-huge text-white mb-4" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1' }}>
                VAMOS CRIAR <br /> JUNTOS
              </h1>
              <p className="text-secondary fw-medium" style={{ fontSize: '1.2rem', maxWidth: '650px' }}>
                Conte o contexto, a urgência e o tipo de entrega que você procura. A resposta já volta com direção clara e escopo técnico.
              </p>
            </div>

            <div className="col-lg-4">
              {/* Adaptação de Fundo */}
              <div className="p-4" style={{ border: '2px dashed #00E676', backgroundColor: 'var(--brutal-bg)' }}>
                <div className="text-uppercase fw-bold mb-2" style={{ color: '#00E676', letterSpacing: '2px', fontSize: '0.8rem' }}>
                  Tempo de Resposta
                </div>
                <div className="text-white fw-bold fs-5">
                  Retornamos em até <br/> 1 DIA ÚTIL.
                </div>
              </div>
            </div>
          </motion.div>

          <div className="row g-5 align-items-start mt-2">
            
            {/* Formulário Brutalista */}
            <div className="col-lg-7">
              <motion.div
                className="p-4 p-md-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6 }}
                /* Adaptação de Fundo e Borda */
                style={{ 
                  backgroundColor: 'var(--brutal-bg)', 
                  border: '2px solid #4d98e2' 
                }}
              >
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                  
                  {/* Estilos dos inputs adaptados para usar variáveis e inherit */}
                  <div className="row g-4">
                    <div className="col-md-6 d-flex flex-column">
                      <label htmlFor="inputFirstName" className="form-label text-uppercase fw-bold text-secondary mb-2" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Nome *</label>
                      <input type="text" className="form-control mt-auto" id="inputFirstName" value={formData.inputFirstName} onChange={handleChange} required 
                        style={{ backgroundColor: 'transparent', border: '1px solid var(--brutal-border)', borderRadius: '0', color: 'var(--brutal-text)', padding: '12px' }} 
                      />
                    </div>
                    <div className="col-md-6 d-flex flex-column">
                      <label htmlFor="inputLastName" className="form-label text-uppercase fw-bold text-secondary mb-2" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Sobrenome</label>
                      <input type="text" className="form-control mt-auto" id="inputLastName" value={formData.inputLastName} onChange={handleChange} 
                        style={{ backgroundColor: 'transparent', border: '1px solid var(--brutal-border)', borderRadius: '0', color: 'var(--brutal-text)', padding: '12px' }} 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inputEmail" className="form-label text-uppercase fw-bold text-secondary" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Email *</label>
                    <input type="email" className="form-control" id="inputEmail" value={formData.inputEmail} onChange={handleChange} required 
                      style={{ backgroundColor: 'transparent', border: '1px solid var(--brutal-border)', borderRadius: '0', color: 'var(--brutal-text)', padding: '12px' }} 
                    />
                  </div>

                  <div>
                    <label htmlFor="inputPhone" className="form-label text-uppercase fw-bold text-secondary" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Telefone</label>
                    <input type="tel" className="form-control" id="inputPhone" placeholder="(84) 99999-9999" value={formData.inputPhone} onChange={handleChange} 
                      style={{ backgroundColor: 'transparent', border: '1px solid var(--brutal-border)', borderRadius: '0', color: 'var(--brutal-text)', padding: '12px' }} 
                    />
                  </div>

                  <div>
                    <label htmlFor="inputMessage" className="form-label text-uppercase fw-bold text-secondary" style={{ letterSpacing: '1px', fontSize: '0.85rem' }}>Mensagem *</label>
                    <textarea className="form-control" id="inputMessage" rows="6" value={formData.inputMessage} onChange={handleChange} required 
                      style={{ backgroundColor: 'transparent', border: '1px solid var(--brutal-border)', borderRadius: '0', color: 'var(--brutal-text)', padding: '12px', resize: 'vertical' }}
                    ></textarea>
                  </div>

                  {/* BOTÃO ATUALIZADO COM FORMATO < > */}
                  <motion.button
                    type="submit"
                    className="btn btn-logo-both brutalist-btn w-100 py-3 mt-3 fw-black text-dark text-uppercase fs-5 border-0"
                    disabled={isSubmitting}
                    style={{ backgroundColor: '#4d98e2' }} 
                    whileHover={{ scale: 1.02, backgroundColor: 'var(--brutal-text)', color: 'var(--brutal-bg)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'ENVIANDO DADOS...' : 'ENVIAR MENSAGEM'}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            {/* Painel Lateral de Informações */}
            <div className="col-lg-5">
              <motion.aside
                className="d-flex flex-column gap-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Bloco Principal de Passos */}
                <div className="p-4 p-md-5" style={{ backgroundColor: 'var(--brutal-bg)', border: '1px solid var(--brutal-border)' }}>
                  <span className="text-uppercase fw-bold" style={{ color: '#B388FF', letterSpacing: '2px', fontSize: '0.85rem' }}>// Próximos passos</span>
                  <h2 className="text-white text-uppercase fw-black mt-3 mb-4" style={{ fontSize: '2rem' }}>BRIEFING E ALINHAMENTO TÉCNICO.</h2>
                  <p className="text-secondary fw-medium mb-0">
                    Depois do primeiro contato, alinhamos escopo, prazo e a melhor forma de transformar a ideia em produto digital.
                  </p>
                </div>

                {/* Grid de Informações de Contato */}
                <div className="row g-3">
                  
                  {/* Bloco Email */}
                  <div className="col-12">
                    <div className="p-4 h-100" style={{ backgroundColor: 'var(--brutal-bg)', border: '1px dashed var(--brutal-border)' }}>
                      <span className="d-flex align-items-center gap-2 text-secondary text-uppercase fw-bold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
                        <i className="bi bi-envelope"></i> EMAIL DIRETO
                      </span>
                      <strong className="text-white fs-5">dunatechltda@gmail.com</strong>
                    </div>
                  </div>

                  {/* Bloco Telefone/WhatsApp */}
                  <div className="col-sm-6">
                    <div className="p-4 h-100" style={{ backgroundColor: 'var(--brutal-bg)', border: '1px dashed var(--brutal-border)' }}>
                      <span className="d-flex align-items-center gap-2 text-secondary text-uppercase fw-bold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
                        <i className="bi bi-whatsapp"></i> WHATSAPP
                      </span>
                      <strong className="text-white fs-6">(84) 99818-5053</strong>
                    </div>
                  </div>

                  {/* Bloco Instagram */}
                  <div className="col-sm-6">
                    <div className="p-4 h-100" style={{ backgroundColor: 'var(--brutal-bg)', border: '1px dashed var(--brutal-border)' }}>
                      <span className="d-flex align-items-center gap-2 text-secondary text-uppercase fw-bold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
                        <i className="bi bi-instagram"></i> INSTAGRAM
                      </span>
                      <a href="https://instagram.com/dunatechbr" target="_blank" rel="noopener noreferrer" className="text-white fw-bold fs-6 text-decoration-none" style={{ color: 'var(--brutal-text)' }}>
                        @dunatech
                      </a>
                    </div>
                  </div>

                  {/* Bloco Endereço */}
                  <div className="col-12">
                    <div className="p-4 h-100" style={{ backgroundColor: 'var(--brutal-bg)', border: '1px dashed var(--brutal-border)' }}>
                      <span className="d-flex align-items-center gap-2 text-secondary text-uppercase fw-bold mb-2" style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>
                        <i className="bi bi-geo-alt"></i> ENDEREÇO
                      </span>
                      <strong className="text-white fs-6">Natal, RN - Brasil (Atendimento Remoto)</strong>
                    </div>
                  </div>

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