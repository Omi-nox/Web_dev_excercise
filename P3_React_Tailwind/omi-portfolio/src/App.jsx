import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms_Con";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 left-8 z-50 bg-[#6366f1] text-white w-10 h-10  rounded-full flex items-center justify-center hover:bg-[#4f46e5] transition-all duration-300 shadow-lg shadow-[#6366f1]/25 text-xl"
    >
      ↑
    </button>
  ) : null
}
// ============================================
// SCROLL PROGRESS COMPONENT
// ============================================
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const current = window.scrollY;
      setProgress((current / total) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circumference = 2 * Math.PI * 30; // radius 45

  return (
    <>
      {/* Linear Progress Bar - Top */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-[#1f2937]">
        <div
          className="h-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Circular Progress - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <svg className="w-16 h-16 -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#1f2937"
            strokeWidth="4"
            fill="none"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="url(#grad)"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            className="transition-all duration-150"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[#f1f5f9] text-xs font-bold">
          {Math.round(progress)}%
        </div>
      </div>
    </>
  );
}

// ============================================
// APP COMPONENT
// ============================================
function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* HERO - Load hote hi animate ho */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Hero />
              </motion.div>

              {/* ABOUT - Scroll par animate ho */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <About />
              </motion.div>

              {/* SKILLS - Scroll par animate ho */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Skills />
              </motion.div>

              {/* PROJECTS - Scroll par animate ho */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Projects />
              </motion.div>

              {/* CONTACT - Scroll par animate ho */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Contact />
              </motion.div>
            </>
          }
        />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />

      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;