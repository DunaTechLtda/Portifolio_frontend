import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  const getInitialTheme = () => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    const storedTheme = window.localStorage.getItem('dunatech-theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem('dunatech-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/portfolio" element={<Portfolio theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/faqs" element={<FAQ theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/contato" element={<Contact theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}