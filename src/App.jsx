import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* A rota principal ("/") vai renderizar o componente Home */}
        <Route path="/" element={<Home />} />
        
        {/* Deixei comentado aqui como ficarão as próximas rotas que vamos criar */}
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/faqs" element={<FAQ />} /> */}
        {/* <Route path="/contato" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}