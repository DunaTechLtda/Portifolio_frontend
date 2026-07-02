import React from 'react';

export default function Navbar() {
  return (
    <section id="Navbar" className="sticky-top bg-dark bg-opacity-75 backdrop-blur">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom border-secondary">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            {/* O React lida melhor com imagens na pasta src/assets/ ou direto da public/ */}
            <img src="/images/assets/Logo_Dunatech.png" width="200px" alt="Logo da Dunatech" />
          </a>
          <ul className="nav nav-pills align-items-center">
            <li className="nav-item">
              <a href="#Inicio" className="nav-link active" aria-current="page">Início</a>
            </li>
            <li className="nav-item">
              <a href="#Servicos" className="nav-link text-white">Serviços</a>
            </li>
            <li className="nav-item">
              <a href="/portfolio" className="nav-link text-white">Portfólio</a>
            </li>
            <li className="nav-item">
              <a href="/faqs" className="nav-link text-white">FAQs</a>
            </li>
            <li className="nav-item ms-2">
              <a href="/contato" className="btn btn-primary">Contato</a>
            </li>
          </ul>
        </header>
      </div>
    </section>
  );
}