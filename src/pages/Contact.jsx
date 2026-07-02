import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';

export default function Contact() {
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

    // SUBSTITUA as chaves abaixo pelas suas credenciais reais do EmailJS
    emailjs.send("service_hqtg8gp", "template_81rl7np", emailData, "s11Bnx4qEbtNFvdXG")
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
    <main className="bg-dark text-white min-vh-100">
      <Navbar />

      <section className="contact-fluid-section position-relative py-5">
        <div className="container py-5 position-relative z-1">
          <motion.div
            className="row align-items-end justify-content-between g-4 mb-4 mb-lg-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <div className="col-lg-7">
              <span className="section-eyebrow">Contato</span>
              <h1 className="section-title mt-3 mb-3">Vamos transformar a próxima ideia em uma interface viva.</h1>
              <p className="section-copy mb-0">
                Conte o contexto, a urgência e o tipo de entrega que você procura. A resposta já volta com direção mais clara.
              </p>
            </div>

            <div className="col-lg-4">
              <div className="glass-card contact-note p-4">
                <div className="contact-note-label">Tempo de resposta</div>
                <div className="contact-note-value">Normalmente retornamos em até 1 dia útil.</div>
              </div>
            </div>
          </motion.div>

          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <motion.div
                className="glass-card contact-form-shell p-4 p-md-5"
                initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65 }}
              >
                <form onSubmit={handleSubmit} className="contact-form-grid">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="inputFirstName" className="form-label contact-label">Nome *</label>
                      <input type="text" className="form-control contact-input" id="inputFirstName" value={formData.inputFirstName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputLastName" className="form-label contact-label">Sobrenome</label>
                      <input type="text" className="form-control contact-input" id="inputLastName" value={formData.inputLastName} onChange={handleChange} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inputEmail" className="form-label contact-label">Email *</label>
                    <input type="email" className="form-control contact-input" id="inputEmail" value={formData.inputEmail} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="inputPhone" className="form-label contact-label">Telefone</label>
                    <input type="tel" className="form-control contact-input" id="inputPhone" placeholder="(84) 99999-9999" value={formData.inputPhone} onChange={handleChange} />
                  </div>

                  <div>
                    <label htmlFor="inputMessage" className="form-label contact-label">Mensagem *</label>
                    <textarea className="form-control contact-input contact-textarea" id="inputMessage" rows="6" value={formData.inputMessage} onChange={handleChange} required></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-lg contact-submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 32px rgba(77, 152, 226, 0.35)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Enviando...' : <><i className="bi bi-send me-2"></i>Enviar Mensagem</>}
                  </motion.button>
                </form>
              </motion.div>
            </div>

            <div className="col-lg-5">
              <motion.aside
                className="contact-side-stack"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <div className="glass-card contact-side-card contact-side-hero p-4 p-md-5 mb-4">
                  <span className="contact-side-eyebrow">Próximos passos</span>
                  <h2 className="contact-side-title mt-3 mb-3">Briefing, direção visual e proposta técnica.</h2>
                  <p className="contact-side-copy mb-0">
                    Depois do primeiro contato, alinhamos escopo, prazo e a melhor forma de transformar a ideia em produto digital.
                  </p>
                </div>

                <div className="contact-mini-grid">
                  <div className="glass-card contact-mini-card">
                    <span className="contact-mini-label">Email</span>
                    <strong>contato@dunatech.com</strong>
                  </div>
                  <div className="glass-card contact-mini-card">
                    <span className="contact-mini-label">Canal</span>
                    <strong>Resposta direta e objetiva</strong>
                  </div>
                  <div className="glass-card contact-mini-card">
                    <span className="contact-mini-label">Formato</span>
                    <strong>Projeto, site ou sistema</strong>
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