import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Sistemas sob medida',
    description: 'Arquitetura e implementação de plataformas customizadas para fluxos operacionais, atendimento e gestão interna.',
    icon: 'bi-code-slash',
    span: 'bento-card-xl',
    accent: 'bento-accent-blue',
    href: '/contato',
    cta: 'Falar sobre o projeto',
  },
  {
    title: 'Sites institucionais vivos',
    description: 'Interfaces institucionais com narrativa visual, performance e identidade forte para destacar a marca.',
    icon: 'bi-browser-chrome',
    span: 'bento-card-md',
    accent: 'bento-accent-cyan',
    href: '/portfolio',
    cta: 'Ver referências',
  },
  {
    title: 'Dashboards e data layers',
    description: 'Painéis executivos e monitoramento visual com leitura rápida, profundidade e hierarquia clara.',
    icon: 'bi-pie-chart-fill',
    span: 'bento-card-md bento-card-tall',
    accent: 'bento-accent-violet',
    href: '/contato',
    cta: 'Estruturar dashboard',
  },
  {
    title: 'Integrações e automações',
    description: 'Conectamos APIs, formulários, CRM e rotinas para reduzir fricção entre sistemas.',
    icon: 'bi-diagram-3-fill',
    span: 'bento-card-sm',
    accent: 'bento-accent-slate',
    href: '/contato',
    cta: 'Conectar fluxos',
  },
  {
    title: 'Suporte e evolução contínua',
    description: 'Manutenção, ajustes de conversão, performance e evolução visual sem perder consistência.',
    icon: 'bi-shield-check',
    span: 'bento-card-sm',
    accent: 'bento-accent-blue',
    href: '/contato',
    cta: 'Solicitar suporte',
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <section id="Servicos" className="services-bento-section position-relative py-5">
      <div className="container py-5 position-relative z-1">
        <div className="row justify-content-between align-items-end g-4 mb-4 mb-lg-5">
          <div className="col-lg-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="section-eyebrow">Serviços</span>
              <h2 className="section-title mt-3 mb-3">
                Bento layout para entregar <span>impacto visual</span> e clareza de oferta.
              </h2>
              <p className="section-copy mb-0">
                Saímos da lógica de colunas iguais e criamos uma composição assimétrica, com cartões que respiram, se sobrepõem em intenção e guiam o olhar com mais energia.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-4 text-lg-end">
            <motion.div
              className="glass-card services-stats-card p-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="services-stats-label">Estrutura</div>
              <div className="services-stats-value">Bento / Glass / Motion</div>
            </motion.div>
          </div>
        </div>

        <div className="services-bento-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className={`bento-card glass-card ${service.span}`}
              variants={cardMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
            >
              <div className={`bento-card-glow ${service.accent}`} />
              <div className="bento-card-top d-flex align-items-center justify-content-between gap-3 mb-4">
                <div className="bento-icon-wrap">
                  <i className={`bi ${service.icon}`} />
                </div>
                <span className="bento-index">0{index + 1}</span>
              </div>

              <h3 className="bento-title mb-3">{service.title}</h3>
              <p className="bento-description mb-4">{service.description}</p>

              <motion.a
                href={service.href}
                className="bento-link d-inline-flex align-items-center gap-2"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {service.cta}
                <i className="bi bi-arrow-right" />
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
