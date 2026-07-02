import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}