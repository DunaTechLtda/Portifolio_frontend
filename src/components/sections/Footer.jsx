import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="Footer" className="border-top border-secondary bg-dark bg-opacity-50">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
          <p className="col-md-4 mb-0 text-muted">
            © {currentYear} Dunatech
          </p>
          <a href="#" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none" aria-label="Logo Dunatech">
            <img src="/images/assets/Simbolo_Dunatech.png" width="50" alt="Logo Dunatech" />
          </a>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><a href="#Inicio" className="nav-link px-2 text-muted">Início</a></li>
            <li className="nav-item"><a href="#Servicos" className="nav-link px-2 text-muted">Serviços</a></li>
            <li className="nav-item"><a href="/portfolio" className="nav-link px-2 text-muted">Portfólio</a></li>
            <li className="nav-item"><a href="/faqs" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="/contato" className="nav-link px-2 text-muted">Contato</a></li>
          </ul>
        </footer>
      </div>
    </section>
  );
}