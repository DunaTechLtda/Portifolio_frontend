import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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

      <section className="py-5 glow-effect">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-12">
              <h1 className="display-4 fw-bold text-white mb-3">Entre em Contato</h1>
              <p className="lead text-muted">
                Estamos prontos para transformar suas ideias em realidade digital.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* O Formulário Controlado */}
            <div className="col-lg-8">
              <div className="card bg-dark border-secondary shadow-lg p-4 p-md-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="inputFirstName" className="form-label text-white">Nome *</label>
                      <input type="text" className="form-control bg-dark text-white border-secondary" id="inputFirstName" value={formData.inputFirstName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="inputLastName" className="form-label text-white">Sobrenome</label>
                      <input type="text" className="form-control bg-dark text-white border-secondary" id="inputLastName" value={formData.inputLastName} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label text-white">Email *</label>
                    <input type="email" className="form-control bg-dark text-white border-secondary" id="inputEmail" value={formData.inputEmail} onChange={handleChange} required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="inputPhone" className="form-label text-white">Telefone</label>
                    <input type="tel" className="form-control bg-dark text-white border-secondary" id="inputPhone" placeholder="(84) 99999-9999" value={formData.inputPhone} onChange={handleChange} />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="inputMessage" className="form-label text-white">Mensagem *</label>
                    <textarea className="form-control bg-dark text-white border-secondary" id="inputMessage" rows="5" value={formData.inputMessage} onChange={handleChange} required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100 shadow-sm" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : <><i className="bi bi-send me-2"></i>Enviar Mensagem</>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}