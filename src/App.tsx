/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dificuldades from "./pages/Dificuldades";
import Sobre from "./pages/Sobre";
import Atendimentos from "./pages/Atendimentos";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-background text-ink">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dificuldades-alimentares" element={<Dificuldades />} />
            <Route path="/dificuldades-alimentares/:topico" element={<Dificuldades />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/atendimentos" element={<Atendimentos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Article />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
