import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    name: "Dr. Marco Almeida",
    company: "SBCP-RN",
    text: '"A plataforma desenvolvida pela Dunatech superou nossas expectativas. Facilitou completamente o gerenciamento dos nossos eventos científicos."',
    stars: 5
  },
  {
    id: 2,
    name: "Dr. João Costa",
    company: "Clínica MARN",
    text: '"O MediSoft revolucionou nossa gestão clínica. O sistema é intuitivo, completo e trouxe uma organização que nunca tivemos."',
    stars: 5
  },
  {
    id: 3,
    name: "Dra. Ana Beatriz",
    company: "Vimont Odontologia",
    text: '"A Dunatech desenvolveu um site que realmente representa o profissionalismo da minha clínica. O resultado foi muito além do esperado."',
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section id="Testimonials" className="testimonials-fluid-section position-relative py-5">
      <div className="container py-5 position-relative z-1">
        <motion.div
          className="row justify-content-between align-items-end g-4 mb-4 mb-lg-5"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="col-lg-7">
            <span className="section-eyebrow">Depoimentos</span>
            <h2 className="section-title mt-3 mb-3">Prova social com acabamento mais premium e estrutura editorial.</h2>
            <p className="section-copy mb-0">Os relatos entram como cards com peso visual, reforçando confiança sem cair em uma grade genérica de colunas iguais.</p>
          </div>
        </motion.div>

        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <motion.article
              className="glass-card testimonial-card"
              key={item.id}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="testimonial-quote-mark">“</div>
              <div className="text-warning mb-3">
                {[...Array(item.stars)].map((_, starIndex) => (
                  <i key={starIndex} className="bi bi-star-fill me-1"></i>
                ))}
              </div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  <i className="bi bi-person-fill" />
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.company}</small>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}